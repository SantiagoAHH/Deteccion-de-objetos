function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white")
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function clearCanvas(){
background("white")
console.log("listo!!!:3");
}

function draw(){

    strokeWeight(20);

    stroke(250, 0, 0);

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }

    document.getElementById("label").innerHTML = "Etiqueta" + results[0].label;

    document.getElementById("confidence").innerHTML = "Precision" + Math.round(results[0].confidence * 100) + "%";

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}