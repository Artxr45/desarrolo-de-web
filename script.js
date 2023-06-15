// Ejemplo de funcionalidad usando JavaScript
// Ejemplo de función para cargar datos dinámicamente desde una API o archivo JSON
function cargarDatos() {
  // Simulación de una llamada a una API o carga de datos desde un archivo JSON
  // Aquí puedes utilizar fetch u otras técnicas para obtener los datos
  // Supongamos que obtenemos datos de profesores desde una API
  const url = 'https://ejemplo-api.com/profesores'; 
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Procesar los datos obtenidos y crear elementos HTML dinámicamente
      const container = document.getElementById('docentes');
      // Ejemplo de iteración sobre los datos de profesores
      data.forEach(profesor => {
        const perfil = document.createElement('div');
        perfil.classList.add('perfil-docente');    
        const nombre = document.createElement('h3');
        nombre.textContent = profesor.nombre;
        perfil.appendChild(nombre);
        const especialidad = document.createElement('p');
        especialidad.textContent = profesor.especialidad;
        perfil.appendChild(especialidad);
        // Puedes seguir agregando más detalles o elementos según tus necesidades
        container.appendChild(perfil);
      });
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
    });
}
// Llamamos a la función para cargar los datos al cargar la página
document.addEventListener('DOMContentLoaded', cargarDatos);
// Otros ejemplos de funcionalidades con JavaScript
// Ejemplo de función para mostrar/ocultar información adicional en un perfil docente al hacer clic
function toggleInformacionAdicional() {
  const perfilDocente = this.parentNode;
  const informacionAdicional = perfilDocente.querySelector('.informacion-adicional');
  informacionAdicional.classList.toggle('visible');
}
// Obtener todos los perfiles de docentes y agregar un evento de clic a cada uno
const perfilesDocentes = document.querySelectorAll('.perfil-docente');
perfilesDocentes.forEach(perfilDocente => {
  const botonMostrarOcultar = perfilDocente.querySelector('.boton-mostrar-ocultar');
  botonMostrarOcultar.addEventListener('click', toggleInformacionAdicional);
});
// Otros eventos y funcionalidades adicionales pueden ser agregados según tus necesidades




















