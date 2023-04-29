classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FrgfEQIT8/',modelLoaded);
function take_snapshot(){
    save('img')
}
function setup(){
    canvas=createcanvas(300,300);
    canvas.center();
    video=createcapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video,0,0,300,300);
}