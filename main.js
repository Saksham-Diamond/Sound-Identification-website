function Start(){
    navigator.mediaDevices.getUserMedia({ audio : true });
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dwUhkp2Gw/model.json',modelReady)

}

function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)

        document.getElementById('sound_name').innerHTML = results[0].label;
        percentage = results[0].confidence * 100;
        document.getElementById('accuracy').innerHTML = percentage.toFixed(3) + " % ";

        if(results[0].label=='Clap'){
            document.getElementById('alien1').src="aliens-01.gif";
            document.getElementById('alien2').src="aliens-02.png";
            document.getElementById('alien3').src="aliens-03.png";
            document.getElementById('alien4').src="aliens-04.png";
        }
        if(results[0].label=='Background Noise'){
            document.getElementById('alien1').src="aliens-01.png";
            document.getElementById('alien2').src="aliens-02.gif";
            document.getElementById('alien3').src="aliens-03.png";
            document.getElementById('alien4').src="aliens-04.png";
        }
        if(results[0].label=='Screaming'){
            document.getElementById('alien1').src="aliens-01.png";
            document.getElementById('alien2').src="aliens-02.png";
            document.getElementById('alien3').src="aliens-03.gif";
            document.getElementById('alien4').src="aliens-04.png";
        }
        if(results[0].label=='Tap'){
            document.getElementById('alien1').src="aliens-01.png";
            document.getElementById('alien2').src="aliens-02.png";
            document.getElementById('alien3').src="aliens-03.png";
            document.getElementById('alien4').src="aliens-04.gif";
        }
    }
}