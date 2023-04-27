let sw=false;
function control(i){
    let vid=document.getElementById('background')     
    let crtl=document.getElementById('ctrl')
    if(i){
        vid.play()
        return;
    }
    sw=!sw;
    
    if(sw){
        vid.play();
        crtl.setAttribute('src','pics/pause.png')
        
    }
    else{
        vid.pause();
        crtl.setAttribute('src','pics/play.png')
    }
}
function change(i){
    let background=document.getElementById('background');
    if(i==1){
        background.setAttribute('src','video/rain.mp4')
    }
    else{
        background.setAttribute('src','video/beach.mp4')
    }
    control(true)

}

// hacer el temporizador, primero experimentar haciendo un reloj en otra página.