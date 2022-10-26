"use strict";

window.addEventListener("scroll", scrollReveal);

function scrollReveal() {
    let revealObjects = document.getElementsByClassName("reveal");

    for(let i = 0; i < revealObjects.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = revealObjects[i].getBoundingClientRect().top;
        let revealPoint = 100;

        console.log(windowHeight)

        if(revealTop < windowHeight - revealPoint){
            revealObjects[i].classList.add("revealed");
            revealObjects[i].classList.remove("reveal");
        }
    }
}