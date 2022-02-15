function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CZ8RMu0S5/model.json',model_ready)
}

function model_ready(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("got results");
}