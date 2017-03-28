alert("hola");

  var sonido = document.getElementById("audio");

/*console.log(sonido);*/

function reproducir(){
  sonido.play();
};

function detener() {
  sonido.pause();
};

function volumenAlto(){
  sonido.volume = sonido.volume +.1;
};

function volumenBajo(){
  sonido.volume = sonido.volume -.1;
};

function updateTrack() {
     var curtime = audio.currentTime;
    var percent = Math.round((curtime * 100) / duration);
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
}
