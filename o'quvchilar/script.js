let video = document.querySelectorAll('video')
let img = document.querySelectorAll('img')

video.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active')

    if(play.paused){
        play.play();
    }else{
        play.pause();
        play.currentTime = 0;
    }
} ));
img.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active')

    if(play.paused){
        play.play();
    }else{
        play.pause();
        play.currentTime = 0;
    }
} ));