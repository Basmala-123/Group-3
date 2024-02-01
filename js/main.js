let asideDrop = document.querySelector(".asideDrop");
let asideDropDown = document.querySelector(".aside-dropDown");

asideDrop.addEventListener("click", function(){
    asideDropDown.classList.toggle("height")
});

let secAsideDrop = document.querySelector(".secAsideDrop");
let secDropDown = document.querySelector(".secDropDown");

secAsideDrop.addEventListener("click", function(){
    if(secDropDown.style.height == 0){
        secDropDown.style.height = secDropDown.scrollHeight + "px";
    }else{
        secDropDown.style.height = null
    }
})

let bars = document.querySelector(".bars");
let close1 = document.querySelector(".close");
let aside = document.querySelector(".aside1");

bars.addEventListener("click", function(){
    aside.style.transform = "translateX(0)"
})

close1.addEventListener("click", function(){
    aside.style.transform = "translateX(100%)"
})
