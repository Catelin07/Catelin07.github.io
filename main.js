let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #55b3ff;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #3e0077;"> Soy estudiante de administración, soy parte de Tecnolochicas, defensora de los derechos de la mujer y la equidad de género.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
