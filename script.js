function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
}

function closeMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("open");
}

function showYear() {
    var year = document.getElementById("year");
    year.textContent = new Date().getFullYear();
}

var words = ["Full-stack developer", "Front-end developer", "Website builder"];
var wordIndex = 0;
var letterIndex = 0;
var deleting = false;

function typeEffect() {
    var typing = document.getElementById("typing");
    var word = words[wordIndex];
    var speed = 100;

    if (deleting) {
        letterIndex--;
        speed = 50;
    } else {
        letterIndex++;
    }

    typing.textContent = word.substring(0, letterIndex);

    if (!deleting && letterIndex === word.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

showYear();
typeEffect();