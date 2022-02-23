noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(350, 300);
    // video.position(30, 200);
    canvas=createCanvas(400, 350);
    canvas.position(560, 200);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initial-dised");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= " +noseX+ "noseY" +noseY);
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        difference= floor(leftwristX -rightwristX);
        console.log("rightwristX= " +rightwristX+ "leftwristX" +leftwristX+ "difference= " +difference);
    }
}
function draw(){
    background('#808080');
    document.getElementById("square_side").innerHTML="Size of square= " +difference+ "px";
    fill('#24a0ed');
    stroke('#0275d8');
    square(noseX, noseY, difference);
}