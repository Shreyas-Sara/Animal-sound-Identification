dog = 0;
cat = 0;
cow = 0;
lion = 0;
function play1(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/dBqW1qSXC/model.json", modelrunning)
}
function modelrunning(){
    classifier.classify(fi_results);
}

function fi_results(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log("hi");
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound_ans").innerHTML = results[0].label;
        document.getElementById("no_times").innerHTML = "Detected Dog = " + dog + " Detected Cat = " + cat + " Detected lion = " + lion + " Detected Cow = " + cow ;

        document.getElementById("sound_ans").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("no_times").style.color = "rgb("+r+","+g+","+b+")";
        
    
        img = document.getElementById("pic");

        if(results[0].label == "Barking"){
            img.src = "dog.gif";
            dog = dog + 1;
        }
        else if(results[0].label == "Meowing"){
            img.src = "cat.jfif";
            cat = cat + 1;
        }
        else if(results[0].label == "Mooing"){
            img.src = "cow.gif";
            cow = cow + 1;
        }
        else if(results[0].label == "Roar"){
            img.src = "lion.gif";
            lion = lion + 1;
        }
        else{
            img.src = "ear.png";
        }
    
    
    
    
    }


}