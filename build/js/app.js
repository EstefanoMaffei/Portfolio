
const almacenadorProyectos = document.querySelector('.proyecto');
const menuMobile           = document.querySelector('.menu-mobile');
const proyectos = [
     proyecto1 = 
     {
          nombre:       'Blog deCafe',
          src :         'build/img/proyectoPortfolio1.png',
          link :        'https://proyectblogcafee.netlify.app/',
          descripcion : 'Un blog creado con html, SASS y un poco de JavaScript, no esta extendido para enviar al backend pero teniendo la utilidad poir si se llegase a necesitar'
     },
     proyecto2 = 
     {
          nombre:       'Encriptador',
          src :         'build/img/proyectoPortfolio2.png',
          link :        'https://resplendent-naiad-9b0312.netlify.app/',
          descripcion : 'En el Challenge de Alura nos hicieron crean un Encriptador de palabras, aca desarrolle la logica y la interfaz de dicho proyecto agregandole tambien un modo Oscuro para que fuera versatil para el usuario.'
     },
     proyecto3 = 
     {
          nombre:       'Bienes Raices',
          src :         'build/img/proyectoPortafolio3.png',
          link :        'https://estefanomaffei.github.io/bieneraices/',
          descripcion : 'Pagina creada desde cero para practica personal. Se elaboro con tecnologias como Gulp, SASS, Javascript y HTML'
     },

]


const crearAreaProyectos = () =>{

     proyectos.forEach(e => {
          
               const proyecto = document.createElement('div');
               proyecto.classList.add('proyecto-completo');
               proyecto.innerHTML = `

               <a href="${e.link}">

               <img alt="imagen Proyecto ${e.nombre}" src="${e.src}">
               </a>
          
               <div class="proyecto-texto">
          
                    <h3>${e.nombre}</h3>
          
                    <p>${e.descripcion}</p>
               </div>
               `;

               almacenadorProyectos.appendChild(proyecto); 
          });
} 

menuMobile.addEventListener('click',() => {
     navegacion = document.querySelector('.header-navegacion');

     if(navegacion.classList.contains('mostrar')){
          navegacion.classList.remove('mostrar');
     }else{
          navegacion.classList.add('mostrar');
     }
})








crearAreaProyectos();



