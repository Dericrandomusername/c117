/* https://teachablemachine.withgoogle.com/models/IMBFVCs9j/ */
function startClassification(
){
    navigator.mediaDevices.getUserMedia({audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IMBFVCs9j/model.json",modelready);
}
function modelready(){
    console.log("model has been initialized");
    classifier.classify(gotresults);

}function gotresults(error,results
    ){
        if(error){
            console.error(error);
        }else{
            console.log(results);
            randomNumber_R=Math.floor(Math.random()*255)+1;
            randomNumber_G=Math.floor(Math.random()*255)+1;
            randomNumber_B=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear:"+results[0].label;
        document.getElementById("result_accuracy").innerHTML="Accuracy:"+results[0].confidence.toFixed(2)*100+"%";
        document.getElementById("result_label").style.color="rgb("+randomNumber_R+","+randomNumber_G+","+randomNumber_B+")";
        document.getElementById("result_accuracy").style.color="rgb("+randomNumber_R+","+randomNumber_G+","+randomNumber_B+")";
        img1=document.getElementById("ear");   
      

        if(results[0].label=="Cat"){
            img1.src="cat gif.gif";
           
        }
        else
        if(results[0].label=="Dog"){
            img1.src="dog bark.gif";
           
        }
else
if(results[0].label=="Lion"){
    img1.src="lion-roar.gif";
 
}
else
{ img1.src="download-removebg-preview.png";

        }
    
        
    }
}