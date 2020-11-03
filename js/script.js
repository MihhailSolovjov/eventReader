console.log("Hello from js file");
const images = ["img/vs1.jpg", "img/vs2.jpg", "img/vs3.jpg", "img/vs4.jpg"];
const imageToChange = document.getElementById("image");

function changeImage(){
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * images.length-1) + 1);
    console.log(rnd);
    imageToChange.src = images[rnd];
}