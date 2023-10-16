// Datos de la tabla
let personajesLol = [
    { Nombre: 'Ahri', 'Tipo de daño': 'Mágico', Carril: 'Medio' },
    { Nombre: 'Garen', 'Tipo de daño': 'Físico', Carril: 'Top' },
    { Nombre: 'Jinx', 'Tipo de daño': 'Físico', Carril: 'Tirador' },
    { Nombre: 'Zed', 'Tipo de daño': 'Físico', Carril: 'Medio' },
    { Nombre: 'Lulu', 'Tipo de daño': 'Mágico', Carril: 'Soporte' },
    { Nombre: 'Darius', 'Tipo de daño': 'Físico', Carril: 'Top' },
    { Nombre: 'Ashe', 'Tipo de daño': 'Físico', Carril: 'Tirador' },
    { Nombre: 'Lux', 'Tipo de daño': 'Mágico', Carril: 'Soporte' },
    { Nombre: 'Gragas', 'Tipo de daño': 'Mágico', Carril: 'Selva' },
    { Nombre: 'Riven', 'Tipo de daño': 'Físico', Carril: 'Top' }
  ];

  let tablaContainer = document.getElementById('root');
  
  // Crea la tabla y aplica estilos
  let tabla = document.createElement('table');
  tabla.style.borderCollapse = 'collapse';
  tabla.style.width = '100%';
  
  // Crea la fila de encabezado y aplica estilos
  let encabezados = ['Nombre', 'Tipo de daño', 'Carril'];
  let encabezadoRow = document.createElement('tr');
  encabezadoRow.style.backgroundColor = '#f2f2f2';
  encabezados.forEach(encabezado => {
    let cell = document.createElement('th');
    cell.textContent = encabezado;
    cell.style.border = '1px solid #dddddd';
    cell.style.padding = '8px';
    encabezadoRow.appendChild(cell);
  });
  tabla.appendChild(encabezadoRow);
  
  // Llena la tabla con los datos y aplica estilos
  personajesLol.slice(0, 10).forEach((personaje, index) => {
    let newRow = document.createElement('tr');
    newRow.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : 'white';
    Object.values(personaje).forEach(valor => {
      let cell = document.createElement('td');
      cell.textContent = valor;
      cell.style.border = '1px solid #dddddd';
      cell.style.padding = '8px';
      newRow.appendChild(cell);
    });
    tabla.appendChild(newRow);
  });
  
  // Agrega la tabla al contenedor en el HTML
  tablaContainer.appendChild(tabla);