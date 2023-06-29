//getting the references to the interactive elements.
const toggleBtn = document.getElementById("switch");
let icon = document.getElementById("switchIcon");
let middle = document.getElementsByClassName("card")[1];

//numeric value for the if statement that runs inside the toggle function.
let middle_visible = 1;

//event listener for the toggle button.
toggleBtn.addEventListener("click", toggle);

//log of the middle column in the console as requested.
console.log("Middle Column Stored As A Variable:\n", middle);

// function to toggle middle column between visible state and hidden state, and also changes the icon in the button.
function toggle(){
    if(middle_visible == 1){
        icon.setAttribute("src", "images/closed.svg");
        middle.style.visibility = "hidden";
        middle_visible--;
    }
    else if(middle_visible == 0){
        icon.setAttribute("src", "images/eye.svg");
        middle.style.visibility = "visible";
        middle_visible++;
    }
}
