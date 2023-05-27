prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_I8tUcv1H/model.json",modelloaded)
//define function modelLoaded
function modelloaded(){
    console.log("model loaded")
}
//define function check() 
function check(){
    ing = document.getElementById("captured_image")
    classifier.classify(ing,gotresult) 
}

//define function gotResult(error, results)
function gotresult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log (result)
        document.getElementById("status").innerHTML = result[0].label
        if(result[0].label == "Mask") { document.getElementById("update_emoji").innerHTML = "&#x1F637;"; }
        if(result[0].label == "No mask") { document.getElementById("update_emoji").innerHTML = "&#x26d4;"; }
    }
}