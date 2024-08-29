

// Creación de elementos
const encabezado = document.createElement('div');
encabezado.className = 'encabezado';

const encabezadoYBotones = document.createElement('div');
encabezadoYBotones.className = 'encabezado-y-botones';

const tituloH3 = document.createElement('h3');
tituloH3.textContent = 'Acerca de mí';

const botones = document.createElement('div');
botones.className = 'botones';

const boton1 = document.createElement('button');
boton1.className = 'boton';
boton1.textContent = 'Botón 1';

const boton2 = document.createElement('button');
boton2.className = 'boton';
boton2.textContent = 'Botón 2';

const tituloH1 = document.createElement('h1');
tituloH1.textContent = 'Axel Jamal Roldan Ceron';

// Añadir botones al contenedor de botones
botones.appendChild(boton1);
botones.appendChild(boton2);

// Añadir título y botones al encabezado
encabezadoYBotones.appendChild(tituloH3);
encabezadoYBotones.appendChild(botones);

// Añadir elementos al encabezado
encabezado.appendChild(encabezadoYBotones);
encabezado.appendChild(tituloH1);

// Añadir el encabezado al cuerpo del documento
document.body.appendChild(encabezado);

// Creación del contenedor principal
const contenedorUnico = document.createElement('div');
contenedorUnico.className = 'contenedor-unico';

const contenedorPrincipal = document.createElement('div');
contenedorPrincipal.className = 'contenedor-principal';

// Sección "Mi Progreso"
const miProgreso = document.createElement('div');
miProgreso.className = 'MiProgreso';

const listaProgreso = document.createElement('ul');
listaProgreso.className = 'parte';

const estudiosLi = document.createElement('li');
estudiosLi.className = 'parte';
estudiosLi.textContent = 'Estudios';

const estudiosOl = document.createElement('ol');
estudiosOl.className = 'parte';

const estudiosItems = [
    'Pre Primaria (Colegio "Mis Huellitas")',
    'Primaria (Colegio "Los Sauces")',
    'Básicos ("Colegio "Los Sauces")',
    'Bachillerato Ciencias y Letras con Orientación en Computación (Colegio "Los Sauces")',
    'Ingeniería en Sistemas 6 semestres (Universidad Mesoamericana)'
];

estudiosItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'parte';
    li.textContent = item;
    estudiosOl.appendChild(li);
});

const lenguajesLi = document.createElement('li');
lenguajesLi.className = 'parte';
lenguajesLi.textContent = 'Lenguajes';

const lenguajesOl = document.createElement('ol');
lenguajesOl.className = 'parte';

const lenguajeEsp = document.createElement('li');
lenguajeEsp.className = 'parte';
lenguajeEsp.textContent = 'Español';

lenguajesOl.appendChild(lenguajeEsp);

const pasatiemposLi = document.createElement('li');
pasatiemposLi.className = 'parte';
pasatiemposLi.textContent = 'Pasatiempos';

const pasatiemposOl = document.createElement('ol');
pasatiemposOl.className = 'parte';

const pasatiemposItems = [
    'Jugar videojuegos',
    'Jugar Béisbol',
    'Jugar Softbol',
    'Armar el Cubo de Rubik'
];

pasatiemposItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'parte';
    li.textContent = item;
    pasatiemposOl.appendChild(li);
});

// Añadir elementos de progreso
listaProgreso.appendChild(estudiosLi);
listaProgreso.appendChild(estudiosOl);
listaProgreso.appendChild(lenguajesLi);
listaProgreso.appendChild(lenguajesOl);
listaProgreso.appendChild(pasatiemposLi);
listaProgreso.appendChild(pasatiemposOl);

miProgreso.appendChild(listaProgreso);

// Sección "Mis Logros"
const misLogros = document.createElement('div');
misLogros.className = 'MisLogros';

const logrosTitulo = document.createElement('h2');
logrosTitulo.className = 'parte2';
logrosTitulo.textContent = 'Logros';

const logrosConcursoH3 = document.createElement('h3');
logrosConcursoH3.className = 'parte2';
logrosConcursoH3.textContent = 'Concurso:';

const logrosConcursoP = document.createElement('p');
logrosConcursoP.className = 'parte2';
logrosConcursoP.textContent = 'En el 2018 participé representando al Colegio "Los Sauces" en el concurso de matemáticas de Burger King teniendo el segundo mejor punteo del concurso.';

const logrosPanamericanosH3 = document.createElement('h3');
logrosPanamericanosH3.className = 'parte2';
logrosPanamericanosH3.textContent = 'Juegos Panamericanos';

const logrosPanamericanosP = document.createElement('p');
logrosPanamericanosP.className = 'parte2';
logrosPanamericanosP.textContent = 'En noviembre del 2019 estuve en la selección de Guatemala de softbol en los Juegos Panamericanos Guatemala 2019 en donde nos jugamos la clasificatoria al mundial, en el cual la obtuvimos ganándole a Estados Unidos 3-1, siendo la primera vez en que Guatemala clasificaba a un Mundial de Softbol en su historia.';

const logrosMundialH3 = document.createElement('h3');
logrosMundialH3.className = 'parte2';
logrosMundialH3.textContent = 'Mundial Nueva Zelanda 2020';

const logrosMundialP = document.createElement('p');
logrosMundialP.className = 'parte2';
logrosMundialP.textContent = 'En febrero del 2020, con la selección de Guatemala jugamos el Mundial de softbol y terminamos en la posición 6 del torneo, convirtiéndonos en la sexta mejor selección del mundo, un récord histórico para Guatemala en el softbol.';

// Añadir logros a la sección
misLogros.appendChild(logrosTitulo);
misLogros.appendChild(logrosConcursoH3);
misLogros.appendChild(logrosConcursoP);
misLogros.appendChild(logrosPanamericanosH3);
misLogros.appendChild(logrosPanamericanosP);
misLogros.appendChild(logrosMundialH3);
misLogros.appendChild(logrosMundialP);

// Sección "Demostración"
const demostracion = document.createElement('div');
demostracion.className = 'Demostracion';

const fotoTitulo = document.createElement('h2');
fotoTitulo.className = 'parte';
fotoTitulo.textContent = 'Foto:';

const centrarDiv = document.createElement('div');
centrarDiv.className = 'centrar';

const fotoImg = document.createElement('img');
fotoImg.src = 'imagenes/softball.jpeg';
fotoImg.alt = 'seleccion sub-18 Guatemala';
fotoImg.className = 'ajustar-imagen';

centrarDiv.appendChild(fotoImg);

const videoTitulo = document.createElement('h2');
videoTitulo.className = 'parte';
videoTitulo.textContent = 'Video:';

const centrar2Div = document.createElement('div');
centrar2Div.className = 'centrar2';

const videoIframe = document.createElement('iframe');
videoIframe.width = '250';
videoIframe.height = '150';
videoIframe.src = 'https://www.youtube.com/embed/gpnJke5NqKs';
videoIframe.frameBorder = '0';
videoIframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
videoIframe.allowFullscreen = true;

centrar2Div.appendChild(videoIframe);

// Añadir elementos de demostración
demostracion.appendChild(fotoTitulo);
demostracion.appendChild(centrarDiv);
demostracion.appendChild(videoTitulo);
demostracion.appendChild(centrar2Div);

// Añadir todo al contenedor principal
contenedorPrincipal.appendChild(miProgreso);
contenedorPrincipal.appendChild(misLogros);
contenedorPrincipal.appendChild(demostracion);

contenedorUnico.appendChild(contenedorPrincipal);
document.body.appendChild(contenedorUnico);

// Crear y añadir el pie de página
const footer = document.createElement('footer');
const fechaActualizacion = document.createElement('p');
fechaActualizacion.textContent = 'Fecha de última actualización: 30/07/2024';
footer.appendChild(fechaActualizacion);
document.body.appendChild(footer);
