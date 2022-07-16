img = "";
Status = "";

function preload(){
 img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#fc32af");
    text("Dog", 45, 75);
    noFill();
    stroke("#fc32af")
    rect(30, 60, 450, 350);

    fill('black');
    text("Cat", 320, 95);
    noFill();
    stroke("black");
    rect(310, 85, 250, 300);
}

function modelLoaded() {
    console.log("Model Loaded!")
    Status = true;
    objectdetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}