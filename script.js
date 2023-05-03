// capture my handles - reference to manipulate an object
// TODO redesign to be more elegant
let redInput = document.getElementById("redInput");
let greenInput = document.getElementById("greenInput");
let blueInput = document.getElementById("blueInput");

// create an event handler - do a thing when an event happens
// document.getElementById("redButton").onclick = () => {
//     console.log("red button was pressed");
// }

// document.getElementById("greenButton").onclick = () => {
//     console.log("green button was pressed");
// }

let buttons = document.querySelectorAll("button");

// buttons.onclick = () => {
//     // if this button is red do this
//     // else do that
//     console.log("a button was pressed");
// }

buttons.forEach((elem) => {
     // console.log("i did a thing", elem);
     elem.onclick = () => {
        if (elem.dataset['color'] == "red") {
            console.log("the red button was pressed", redInput.value);
        } else if (elem.dataset['color'] == "green") {
            console.log("the green button was pressed", greenInput.value);
        } else if (elem.dataset['color'] == "blue") {
            console.log("the blue button was pressed", blueInput.value);
        } else {
            console.log("I dont know what you pressed");
        }
     }
});

// buttons.forEach(callback);

// function callback() {
//     console.log("i did a thing"); 
// }


console.log(buttons);