let openbtn = document.getElementById("openbtn");
let closebtn = document.getElementById("closebtn");

openbtn.addEventListener("click", function(){
    document.getElementById("mysidebar").style.width = "500px";
})

closebtn.addEventListener("click", function(){
    document.getElementById("mysidebar").style.width = "0px";
})



//dropdown menu

let myBtn = document.getElementById("mybtn");
myBtn.addEventListener("click", function(){
    document.getElementById("mydropdown").classList.toggle("show");
    document.querySelector(".dropdown").style.height = "auto";
    document.querySelector(".dropdown").style.border ="1px solid  #6046b6";
})


//slider

let info = [
    {
        id: 1,
        desc: "PizzaHouse is the longest lasting pizza place in the city and is well run and staffed. Prices are great and allow me to keep coming back.",
        img :"images/user-6-115x115.jpg",
        name: "Aaron Wilson"
    },

    {
       id: 2,
       desc:"I am a real pizza addict, and even when I’m home I prefer your pizzas to all others. They taste awesome and are very affordable.",
       img:"images/user-7-115x115.jpg",
       name:"Stephanie Williams"
     
    },

    {
        id: 3,
        desc: "PizzaHouse is the longest lasting pizza place in the city and is well run and staffed. Prices are great and allow me to keep coming back.",
        img :"images/user-8-115x115.jpg",
        name: "Aaron Wilson"
    },

    {
        id: 1,
        desc: "PizzaHouse is the longest lasting pizza place in the city and is well run and staffed. Prices are great and allow me to keep coming back.",
        img :"images/user-9-115x115.jpg",
        name: "Aaron Wilson"
    }

];

let text = document.getElementById("text");
let user = document.getElementById("user-img");
let name = document.getElementById("client-name");


let userItem = document.querySelector(".user3");

window.addEventListener("DOMContentLoaded", function(){
let Info = info.map(function(item){
    return `<div class="user-item col-lg-3 col-md-6 col-sm-12">
    <div class="user-item1">
    <p class="p1 py-5" id="text">${item.desc}</p>
    </div>
    <img src="${item.img}">
    <h5 id="client-name">
        ${item.name}
    </h5>
    <p class="p2">client</p>
</div>`
});
console.log(Info);

Info = Info.join("");
userItem.innerHTML = Info;
});



// let prevBtn = document.getElementById("prev");
// let nextBtn = document.getElementById("next");
// let slides = document.querySelectorAll(".user-item");


// slides.forEach(function(slide, index){
//     slide.style.left = `${index * 30}%`;
// })

// let counter = 0;


// prevBtn.addEventListener("click", function(){
// counter--;
// carousel();



// })

// nextBtn.addEventListener("click", function(){
//     counter++;
//     carousel();
// })

// function carousel(){
//     slides.forEach(function(e){
//      e.style.transform = `translateX(-${counter * 30}%)`;
//     })
// }

// console.log(carousel);


//left menu

let myMenu = document.getElementById("mymenu");

myMenu.addEventListener("click", function(){
    document.querySelector(".left-menu").style.width = "300px";
    myMenu.style.display = "none";
    crossBtn.style.display = "block";
    
})

let crossBtn = document.getElementById("crossBtn");

crossBtn.addEventListener("click", function(){
    document.querySelector(".left-menu").style.width = "0px";
    crossBtn.style.display = "none";
    myMenu.style.display = "block";
})


