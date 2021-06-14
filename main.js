function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tintColour="";
}

function draw(){
    image(video,0,0,640,480);
    tint(tintColour);
}

function take_snapshot(){
    save('filter_picture.png')
}

function apply_filter(){
    tintColour=document.getElementById("input").value;
}