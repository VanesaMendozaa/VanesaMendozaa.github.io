//alert("hola");

//Este es el codigo para la animacion 
let app= document.getElementById('typewriter');
let typewriter=new Typewriter(app, {
       loop:true,
       delay: 75,
       
});

typewriter
  .pauseFor(2500)
  .tipeString('Estudio la carrera de administracion curso el primer semestre y entre a un curso de programacion para mejorar mi aprendizaje')
  .pauseFor (200)
  .delateChars(10)
  .star();


