// Crear el contenedor principal
const container = document.getElementById('Tabla');

// Crear y añadir el contenedor del título
const containerFondo = document.createElement('div');
containerFondo.className = 'containerFondo';

const title = document.createElement('h2');
title.id = 'tablaCam'; // Asignar un ID al título para la función
title.className = 'cambioInicial'; // Clase inicial
title.textContent = 'Tarea no. 4';
containerFondo.appendChild(title);
container.appendChild(containerFondo);

// Crear la tabla
const table = document.createElement('table');

// Crear la fila del encabezado
const headerRow = document.createElement('tr');

const headers = ['No.', 'Código', 'Producto', 'Precio'];
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

// Datos de los productos
const productos = [
    { no: 1, codigo: 'AC2254', producto: 'Producto no. 1', precio: 'Q 125.00' },
    { no: 2, codigo: 'HO3216', producto: 'Producto no. 2', precio: 'Q 185.00' },
    { no: 3, codigo: 'RD3216', producto: 'Producto no. 3', precio: 'Q 235.50' },
    { no: 4, codigo: 'PX9864', producto: 'Producto no. 4', precio: 'Q 369.99' },
    { no: 5, codigo: 'ZA98765', producto: 'Producto no. 5', precio: 'Q 850.50' }
];

// Crear las filas de la tabla
productos.forEach(producto => {
    const row = document.createElement('tr');

    Object.values(producto).forEach(text => {
        const cell = document.createElement('td');
        cell.textContent = text;
        row.appendChild(cell);
    });

    table.appendChild(row);
});

// Añadir la tabla al contenedor principal
container.appendChild(table);


// Función para cambiar los estilos de las filas pares e impares
function changesStyles() {
    var changeTable = document.getElementById("tablaCam");

    console.log("Clase actual: " + changeTable.className);

    const rows = table.getElementsByTagName('tr');
    if (changeTable.className == "cambioInicial") {
        for (let i = 1; i < rows.length; i++) {
            if (i % 2 === 0) {
                rows[i].style.backgroundColor = 'orange'; // Color para filas pares en estilo naranja
            } else {
                rows[i].style.backgroundColor = 'skyblue'; // Color para filas impares en estilo celeste
            }
        }
        changeTable.setAttribute("class", "segundoCam");
        
    } else if (changeTable.className == "segundoCam") {
        for (let i = 1; i < rows.length; i++) {
            if (i % 2 === 0) {
                rows[i].style.backgroundColor = 'skyblue'; // Color para filas pares en estilo celeste
            } else {
                rows[i].style.backgroundColor = 'orange'; // Color para filas impares en estilo naranja 
            }
        }
        changeTable.setAttribute("class", "cambioInicial");
    }
}
