Peter_Pan_song = "";
Harry_Potter_Theme_Song = "";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;

function setup(){
   canvas = createCanvas(600,530);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video,modelLoaded);
   pose.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,530);
}

function preload(){
    Peter_Pan_song = loadSound(music2.mp3);
    Harry_Potter_Theme_Song = loadSound(music.mp3);
}

function modelLoaded(){
    console.log("PoseNet Is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        leftWrist_x = results[0].pose.pose.leftWrist.x;
        leftWrist_y = results[0].pose.pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);
        
        rightWrist_x = results[0].pose.pose.rightWrist.x;
        rightWrist_y = results[0].pose.pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}