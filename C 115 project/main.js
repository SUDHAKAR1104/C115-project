function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center()
video=createCapture(VIDEO);
video.size(300,300);
video.hide()

poseNet=ml5.poseNet(video,modelloaded)

poseNet.on('pose',gotposes)
}

function draw(){
image(video,0,0,300,300);
}

function take_snapshot(){
    save('My_image.png')
}

function modelloaded(){
    console.log("Posenet is initialized !")
}

function gotposes(results){
    if (results.length > 0){
        console.log(results);
        console.log("nosex = "+results[0].pose.nose.x)
        console.log("nosey = "+results[0].pose.nose.y)
    }
}

