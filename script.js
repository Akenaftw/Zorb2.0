const tabs = document.getElementsByClassName("tab");
const slider = document.getElementsByTagName("header")[0];
/*const tab_buttons = document.getElementsByClassName("tab-button");*/
const leftBtn = document.querySelector(".prev");
const rightBtn = document.getElementsByClassName("next")[0];
/*const images = ["Images/Zorb1.jpeg","Images/Zorb2.jpg","Images/Zorb3.jpeg"];*/
const images = document.getElementsByClassName("mySlides");

images[0].style.display = "block";
let index = 0;
let interval = setInterval(()=> {
    rightBtn.click();
}, 3000);
/*
let interval = setInterval(()=>{
    rightBtn.click();
}, 3000);*/
function handleRest(index){
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("dot")[index].classList.add("active");
    clearInterval(interval);
    interval = setInterval(()=> {
        rightBtn.click();
    }, 3000);
}

rightBtn.addEventListener("click", () => {
    index++;
    if(index === images.length){
        index = 0;
    }
    /*slider.style.backgroundImage = images[index];*/
    Array.from(images).forEach(image => image.style.display = "none");
    images[index].style.display = "block";
    handleRest(index);
})

leftBtn.addEventListener("click", () => {
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    /*slider.style.backgroundImage = images[index];*/
    Array.from(images).forEach(image => {
        image.style.display = "none"
    });
    images[index].style.display = "block";
    handleRest(index);
})
/*
tab_buttons.addEventListener("click", e => {
    let target = e.target;
    let showTab = target.getAttribute("data-attribute");
    tabs.forEach(tab => {
        tab.style.display = "hidden";
    });
    showTab.style.display = "block";
})*/

function Counter(){
    let countDiv = document.getElementById("counter");
    let countTo = countDiv.innerText;
    let counter = 0;
    let countInterval = setInterval(() => {

        if(counter === countTo){
            clearInterval(countInterval)
        }
    })
}