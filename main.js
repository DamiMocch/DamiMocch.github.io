var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

// Comentario
typewriter.typeString('Desarrolladora de Software Jr. | Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    // Número de Caracteres que se borraran
    .deleteChars(6)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();