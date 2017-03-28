alert("hola");


  var sonido = document.getElementById("audio");

console.log(sonido);

function reproducir(){
  sonido.play();
}

function stop() {
  sonido.mute();
}

function volumenAlto(){
  sonido.volume = sonido.volume +.1;
}

function volumenBajo(){
  sonido.volume = sonido.volume -.1;
}
