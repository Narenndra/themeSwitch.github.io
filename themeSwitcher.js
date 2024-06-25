let bgContainerEle = document.getElementById("bgContainer");
let headingEle = document.getElementById("heading");
let userInputEle = document.getElementById("themeUserInput");
let text;

function apply(event) {
    if (event.key === "Enter") {
        text = userInputEle.value;
        if (text === "Dark") {
            bgContainerEle.classList.remove("bg-container");
            bgContainerEle.classList.add("bg-container2");
            headingEle.style.color = "white";
        } else if (text === "Light") {
            bgContainerEle.classList.remove("bg-container2");
            bgContainerEle.classList.add("bg-container");
            headingEle.style.color = "#014d40";
        } else {
            alert("enter the valid theme");
        }
    }
}

userInputEle.addEventListener("keydown", apply);