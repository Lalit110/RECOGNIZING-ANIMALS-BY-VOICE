function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CZ8RMu0S5/model.json',model_ready)
}

function model_ready(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("got results");
    function StartClassification(){
        navigator.mediaDevices.getUserMedia({audio:true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/e8zedOvPs/model.json',model_ready)
    }
    
    function model_ready(){
        classifier.classify(gotResults);
    }
    
    function gotResults(error,results){
        if(error){
            console.error(error);
        }else{
            console.log(results);
            random_number_r = Math.floor(Math.random()*255) + 1;
            random_number_g = Math.floor(Math.random()*255) + 1;
            random_number_b = Math.floor(Math.random()*255) + 1;
            document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
            document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2)+"%";
            document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
            document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
            
            img1 = document.getElementById("Ear_img");
    
            if(results[0].label == "Barking"){

                img1.src = "Dog.webp";
    
            }
            else if(results[0].label == "Meowing"){
    
                img1.src = "Cat.png";
    
            }
            else if(results[0].label == "Roaring"){
    
                img1.src = "Lion.jpg";
    
            }
        }
    }