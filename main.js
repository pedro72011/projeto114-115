nosex=0;
nosey=0;
function preload(){
   // gato=loadImage("https://i.postimg.cc/K8XHzHP1/filto-gato.png")
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  }
function draw(){
image(video,0,0,300,300);
}