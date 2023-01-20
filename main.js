var song = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
scoreleftwrist = 0;
function preload(){
    song = loadSound("music.mp3");

}

function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized')
}
function draw(){
image(video,0,0,600,500);

fill("#FF0000");
stroke("#FF0000");
if(scoreleftwrist > 0.2)
{


circle(leftwristx, leftwristy, 20);
InNumberleftwristx = Number(leftwristx);
remove_decimals = floor(InNumberleftwristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "Volume = " + volume;
song.setVolume.setVolume(volume);
}
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist = " + scoreleftwrist);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
    rightwristx = results[0].pose.rightWrist.x;
    rightwristy = results[0].pose.rightWrist.y;
        console.log("leftwristx = "+ leftwristx +"leftwristy = " + leftwristy);
        console.log("rightwristx = "+ rightwristx + "rightleftwristy = " + rightwristy) ; 
    }
}