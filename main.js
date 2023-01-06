object=""
function preload(){
    video=createVideo('video.mp4')
    
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video.hide()
}
function draw(){
    image(video,0,0,300,300)
    if(status!=""){
        object1.detect(video,gotresult)
        console.log(object)
        for(i=0;i<object.length;i++){
            fill('red')
            stroke("red")
            noFill()
            persent=floor(object[i].confidence*100)
            text(object[i].label+persent+"%",object[i].x,object[i].y)
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
            
            
            
        }
        document.getElementById("status").innerHTML="status: Status Detected"
        document.getElementById("ooo").innerHTML="The number of object ="+object.length
    }    

}
function start(){
    object1=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status : status Detecting"

}
function modelLoaded(){
    status=true
    video.loop()
    video.speed(1)
    video.volume(0)
}
function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        object=result
        console.log(object)

    }
}