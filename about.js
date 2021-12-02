
let openbtn = document.getElementById("openbtn");
let closebtn = document.getElementById("closebtn");

openbtn.addEventListener("click", function(){
    document.getElementById("mysidebar").style.width = "500px";
})

closebtn.addEventListener("click", function(){
    document.getElementById("mysidebar").style.width = "0px";
})




let fewInfo = document.getElementById("fewinfo");
let mission = document.getElementById("mission");
let goals = document.getElementById("goals");
let values = document.getElementById("values");




fewInfo.addEventListener("click", function(){
   document.querySelector(".words").style.display = "block";
    document.querySelector(".mission").style.display = "none";
    document.querySelector(".goals").style.display = "none";
    document.querySelector(".values").style.display = "none";
    

})
mission.addEventListener("click", function(){
    document.querySelector(".words").style.display = "none";
    document.querySelector(".mission").style.display = "block";
    document.querySelector(".goals").style.display = "none";
    document.querySelector(".values").style.display = "none";
    

})

goals.addEventListener("click", function(){
    document.querySelector(".words").style.display = "none";
    document.querySelector(".mission").style.display = "none";
    document.querySelector(".goals").style.display = "block";
    document.querySelector(".values").style.display = "none";
})

values.addEventListener("click", function(){
    document.querySelector(".words").style.display = "none";
    document.querySelector(".mission").style.display = "none";
    document.querySelector(".goals").style.display = "none";
    document.querySelector(".values").style.display = "block";
})




// our history


let content1 = document.getElementById("circle1");

let content2 = document.getElementById("circle2");

let content3 = document.getElementById("circle3");

let content4 = document.getElementById("circle4");


content1.addEventListener("click", function(){
    document.querySelector(".h-content1").style.display = "block";
    document.querySelector(".h-content2").style.display = "none";
    document.querySelector(".h-content3").style.display = "none";
    document.querySelector(".h-content4").style.display = "none";
   

    document.querySelector(".h-circle1").style.height = "40px";
    document.querySelector(".h-circle1").style.width = "40px";

    document.querySelector(".h-circle2").style.width = "28px";
    document.querySelector(".h-circle2").style.height = "28px";

    document.querySelector(".h-circle3").style.width = "28px";
    document.querySelector(".h-circle3").style.height = "28px";

    document.querySelector(".h-circle4").style.width = "28px";
    document.querySelector(".h-circle4").style.height = "28px";
    



})
content2.addEventListener("click", function(){
    document.querySelector(".h-content1").style.display = "none";
    document.querySelector(".h-content2").style.display = "block";
    document.querySelector(".h-content3").style.display = "none";
    document.querySelector(".h-content4").style.display = "none";

    document.querySelector(".h-circle2").style.width = "40px";
    document.querySelector(".h-circle2").style.height = "40px";

    document.querySelector(".h-circle1").style.height = "28px";
    document.querySelector(".h-circle1").style.width = "28px";

    document.querySelector(".h-circle3").style.width = "28px";
    document.querySelector(".h-circle3").style.height = "28px";

    document.querySelector(".h-circle4").style.width = "28px";
    document.querySelector(".h-circle4").style.height = "28px";


    
})
content3.addEventListener("click", function(){
    document.querySelector(".h-content1").style.display = "none";
    document.querySelector(".h-content2").style.display = "none";
    document.querySelector(".h-content3").style.display = "block";
    document.querySelector(".h-content4").style.display = "none";

    document.querySelector(".h-circle2").style.width = "28px";
    document.querySelector(".h-circle2").style.height = "28px";

    document.querySelector(".h-circle1").style.height = "28px";
    document.querySelector(".h-circle1").style.width = "28px";

    document.querySelector(".h-circle3").style.width = "40px";
    document.querySelector(".h-circle3").style.height = "40px";

    document.querySelector(".h-circle4").style.width = "28px";
    document.querySelector(".h-circle4").style.height = "28px";


})
content4.addEventListener("click", function(){
    document.querySelector(".h-content1").style.display = "none";
    document.querySelector(".h-content2").style.display = "none";
    document.querySelector(".h-content3").style.display = "none";
    document.querySelector(".h-content4").style.display = "block";


    document.querySelector(".h-circle2").style.width = "28px";
    document.querySelector(".h-circle2").style.height = "28px";

    document.querySelector(".h-circle1").style.height = "28px";
    document.querySelector(".h-circle1").style.width = "28px";

    document.querySelector(".h-circle3").style.width = "28px";
    document.querySelector(".h-circle3").style.height = "28px";

    document.querySelector(".h-circle4").style.width = "40px";
    document.querySelector(".h-circle4").style.height = "40px";


})


// what people say

let imgBtn1 = document.querySelector(".op-img1");
let imgBtn2 = document.querySelector(".op-img2");
let imgBtn3 = document.querySelector(".op-img3");
let imgBtn4 = document.querySelector(".op-img4");

imgBtn1.addEventListener("click", function(){
    document.querySelector(".opinion1").style.display = "block";
    document.querySelector(".opinion2").style.display = "none";
    document.querySelector(".opinion3").style.display = "none";
    document.querySelector(".opinion4").style.display = "none";
})

imgBtn2.addEventListener("click", function(){
    document.querySelector(".opinion1").style.display = "none";
    document.querySelector(".opinion2").style.display = "block";
    document.querySelector(".opinion3").style.display = "none";
    document.querySelector(".opinion4").style.display = "none";
})

imgBtn3.addEventListener("click", function(){
    document.querySelector(".opinion1").style.display = "none";
    document.querySelector(".opinion2").style.display = "none";
    document.querySelector(".opinion3").style.display = "block";
    document.querySelector(".opinion4").style.display = "none";
})

imgBtn4.addEventListener("click", function(){
    document.querySelector(".opinion1").style.display = "none";
    document.querySelector(".opinion2").style.display = "none";
    document.querySelector(".opinion3").style.display = "none";
    document.querySelector(".opinion4").style.display = "block";
})



//dropdown

