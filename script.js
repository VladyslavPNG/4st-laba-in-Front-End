document.addEventListener("DOMContentLoaded", function () {
    
    const el1 = document.getElementById("target-element");
    let clickCount1 = 0;

    el1.addEventListener("click", function () {
        clickCount1++;
        
        let step = clickCount1 % 3;

        if (step === 1) {
            const elementById = document.getElementById("target-element");
            elementById.style.backgroundColor = "blue";
            elementById.style.color = "white";
            elementById.classList.add("padded");
        } 
        else if (step === 2) {
            const elementById = document.getElementById("target-element");
            elementById.style.backgroundColor = "red";
            elementById.style.color = "yellow";
        } 
        else {
            const elementById = document.getElementById("target-element");
            elementById.style.backgroundColor = "transparent";
            elementById.style.color = "black";
            elementById.classList.remove("padded");
        }
    });

        const el2 = document.getElementById("target-element2");
    let clickCount2 = 0;

    el2.addEventListener("click", function () {
        clickCount2++;
        let step = clickCount2 % 3; 

        if (step === 1) {
            const elementByQuery = document.querySelector("#target-element2");
            elementByQuery.style.backgroundColor = "green";
            elementByQuery.style.color = "white";
            elementByQuery.classList.add("padded");
        } 
        else if (step === 2) {
            const elementByQuery = document.querySelector("#target-element2");
            elementByQuery.style.backgroundColor = "yellow"; 
            elementByQuery.style.color = "black";
        } 
        else {
            const elementByQuery = document.querySelector("#target-element2");
            elementByQuery.style.backgroundColor = "transparent";
            elementByQuery.style.color = "black";
            elementByQuery.classList.remove("padded");
        }
    });

    const image = document.getElementById("main-image");
    const btnAdd = document.getElementById("btn-add");
    const btnZoomIn = document.getElementById("btn-zoom-in");
    const btnZoomOut = document.getElementById("btn-zoom-out");
    const btnRemove = document.getElementById("btn-remove");

    let currentScale = 100; 

    btnAdd.addEventListener("click", function () {
        image.style.display = "block"; 
    });

    btnZoomIn.addEventListener("click", function () {
        currentScale += 10; 
        image.style.width = currentScale + "%";
    });

    btnZoomOut.addEventListener("click", function () {
        if (currentScale > 10) { 
            currentScale -= 10;  
            image.style.width = currentScale + "%";
        }
    });

    btnRemove.addEventListener("click", function () {
        image.style.display = "none"; 
    });
});