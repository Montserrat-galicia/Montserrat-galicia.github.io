//console.log("Hola Mundo! desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2>Desarrolladora Fronted Jr. | Estudiante de Ingeniería en Telemática</h2>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes crear, lo puedes imaginar!')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();
