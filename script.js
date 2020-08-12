const tabs = document.getElementsByClassName("tab");
const slider = document.getElementsByTagName("header")[0];
const tab_buttons = document.getElementsByClassName("tab-button");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const images = ["Images/Zorb1.jpeg","Images/Zorb2.jpg","Images/Zorb3.jpeg"];
let index = 0;
let interval = setInterval(()=>{
    rightBtn.click();
}, 3000);

leftBtn.addEventListener("click", () => {
    index++;
    if(index === images.length){
        index = 0;
    }
    slider.style.backgroundImage = images[index];
})

rightBtn.addEventListener("click", () => {
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    slider.style.backgroundImage = images[index];
})

tab_buttons.addEventListener("click", e => {
    let target = e.target;
    let showTab = target.getAttribute("data-attribute");
    tabs.forEach(tab => {
        tab.style.display = "hidden";
    });
    showTab.style.display = "block";
})