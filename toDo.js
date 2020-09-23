// Click plus to hide/show input 
let inputDiv = document.getElementById("inputDiv");
let plusIcon = document.getElementsByTagName("i")[0];
let notHidden = true;
plusIcon.addEventListener("click", function(){
    inputDiv.classList.toggle("hidden");
    
    // Set timeout to deley animation on display none 
    setTimeout(function() {
        if (notHidden) {
            inputDiv.style.display = "none";
        }else {
            inputDiv.style.display = "flex";
        }
        notHidden = !notHidden
    }, 300);
})

// Assign colours
let listLen = 0;
function assignColour(){
    let newDivClass = document.getElementsByClassName("newDivClass");
    for (let i = 0; i < listLen; i ++) {
        if (i % 2 === 0) {
            newDivClass[i].style.backgroundColor = "#005086";
        }else {
            newDivClass[i].style.backgroundColor = "#318fb5";
        }
    }
}

// Input to add to-do item 
let inputBox = document.getElementById("inputBox");
let itemDiv = document.getElementById("itemDiv");
inputBox.addEventListener("keypress", function(e){
    // Record item when Enter is clicked
    if (e.key === "Enter") {
        listLen ++;
        let inputValue = inputBox.value;
        let node = document.createTextNode(inputValue);
        
        // Clear the text input box after 
        inputBox.value = inputBox.defaultValue;
        
        // Wrap text in span and then in div and the outter div 
        let newSpan = document.createElement("span");
        newSpan.appendChild(node);
        newSpan.style.marginLeft = "20px";
        newSpan.style.verticalAlign = "middle";
        let newDiv = document.createElement("div");
        newDiv.className += "newDivClass";
        newDiv.classList.add("newDivStyle");
        
        newDiv.addEventListener("click", function(){
            this.classList.toggle("clickThrough");
        })
        let newButton = document.createElement("button");
        newButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        
        // Default button style is hidden
        newButton.classList.add("newButtonStyle");

        // mouse over 
        newDiv.addEventListener("mouseover", function(){
            newButton.classList.add("buttonShow");
        })
        // mouse out 
        newDiv.addEventListener("mouseout", function(){
            newButton.classList.remove("buttonShow");
        })

        // Button click to delete to-do item 
        newButton.addEventListener("click", function(){
            newDiv.classList.add("clickThrough")
            newDiv.className -= "newDivClass";
            listLen --;
            assignColour();
            
            newDiv.classList.add("hidden");

            // Set time out for animation delay 
            setTimeout(function() {
                newDiv.style.display = "none";
            }, 300);
        })
        // Wrap elements
        newDiv.appendChild(newButton);
        newDiv.appendChild(newSpan);
        itemDiv.appendChild(newDiv);
        assignColour();
    }
})
