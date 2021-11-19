let openbtn = document.getElementById("openbtn");
let closebtn = document.getElementById("closebtn");

openbtn.addEventListener("click", function(){
    document.getElementById("mysidebar").style.width = "500px";
})

closebtn.addEventListener("click", function(){
    document.getElementById("mysidebar").style.width = "0px";
})

//bottom bar on hover

// let display = document.getElementById("display");


// display.addEventListener("mouseover", function() {
//     document.querySelector(".bottom-bar").style.height = "70px";
//     display.style.marginBottom = "70px";
//     display.style.transition = ".5s ease";
//     document.querySelector(".bottom-bar").style.visibility = "visible";
//     //document.querySelector(".bottom-bar").style.transition = ".5s ease";


// })

// display.addEventListener("mouseout", function(){
//     document.querySelector(".bottom-bar").style.height = "0px";
//     display.style.marginBottom = "0";
//     document.querySelector(".bottom-bar").style.visibility = "hidden";
    
    
// })