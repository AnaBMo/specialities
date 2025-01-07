/* *********************************************************************************
   2. Creación del Servidor.
   4. Generación de Páginas HTML:
    - Utiliza literal string para construir páginas HTML directamente en el código.
    - Crea una página para cada especialidad que muestre el título de la página, 
    el número de personas y los detalles de cada usuario.
********************************************************************************* */

const express = require('express');
const app = express();

const { obtenerListaUsuarios, obtenerdetalleUsuarios } = require('./listaUsuarios');
const filtrarUsuariosPorEspecialidad = require('./listaEspecialidad');

/* 
Inicio 
(con enlace a página sin configurar para provocar error 404)
*/
app.get('/', (req, res) => {
  res.send(`
    <h1> Bienvenido </h1>
    <p>Path actual: ${req.path}</p>
    <nav>
        <a href="/marketing"> Marketing </a> | 
        <a href="/developers"> Developers </a> | 
        <a href="/QAs"> QAs </a> | 
        <a href="/ventas"> Ventas </a> | 
        <a href="/contacto"> Contacto </a> 
    </nav>
  `);
});

/* 
Marketing 
*/
app.get('/marketing', (req, res) => {
    const usuarios = obtenerListaUsuarios();
    const usuariosMarketing = filtrarUsuariosPorEspecialidad(usuarios, 'marketing');
    const detalles = obtenerdetalleUsuarios(usuariosMarketing);
    
    res.send(`
      <h1> Marketing </h1>
      <h4> Número de personas: ${usuariosMarketing.length} </h4>
      <h4> Detalle de cada usuario: </h4>
      <ul>${detalles}</ul>
      <p>Path actual: /marketing</p>
      <nav>
          <a href="/"> Inicio </a> | 
          <a href="/developers"> Developers </a> | 
          <a href="/QAs"> QAs </a> | 
          <a href="/ventas"> Ventas </a>
      </nav>
    `);
});

/* 
Developers 
*/
app.get('/developers', (req, res) => {
    const usuarios = obtenerListaUsuarios();
    const usuariosDevelopers = filtrarUsuariosPorEspecialidad(usuarios, 'developers');
    const detalles = obtenerdetalleUsuarios(usuariosDevelopers);
    
    res.send(`
      <h1> Developers </h1>
      <h5> Número de personas: ${usuariosDevelopers.length} </h5>
      <h6> Detalle de cada usuario: </h6>
      <ul>${detalles}</ul>
      <p>Path actual: /developers</p>
      <nav>
          <a href="/"> Inicio </a> | 
          <a href="/marketing"> Marketing </a> | 
          <a href="/QAs"> QAs </a> | 
          <a href="/ventas"> Ventas </a>
      </nav>
    `);
});

/* 
QAs 
*/
app.get('/QAs', (req, res) => {
    const usuarios = obtenerListaUsuarios();
    const usuariosQAs = filtrarUsuariosPorEspecialidad(usuarios, 'QAs');
    const detalles = obtenerdetalleUsuarios(usuariosQAs);
    
    res.send(`
      <h1> QAs </h1>
      <h5> Número de personas: ${usuariosQAs.length} </h5>
      <h6> Detalle de cada usuario: </h6>
      <ul>${detalles}</ul>
      <p>Path actual: /QAs</p>
      <nav>
          <a href="/"> Inicio </a> | 
          <a href="/marketing"> Marketing </a> | 
          <a href="/developers"> Developers </a> | 
          <a href="/ventas"> Ventas </a>
      </nav>
    `);
});

/* 
Ventas 
*/
app.get('/ventas', (req, res) => {
    const usuarios = obtenerListaUsuarios();
    const usuariosVentas = filtrarUsuariosPorEspecialidad(usuarios, 'ventas');
    const detalles = obtenerdetalleUsuarios(usuariosVentas);
    
    res.send(`
      <h1> Ventas </h1>
      <h5> Número de personas: ${usuariosVentas.length} </h5>
      <h6> Detalle de cada usuario: </h6>
      <ul>${detalles}</ul>
      <p>Path actual: /ventas</p>
      <nav>
          <a href="/"> Inicio </a> | 
          <a href="/marketing"> Marketing </a> | 
          <a href="/developers"> Developers </a> | 
          <a href="/QAs"> QAs </a> 
      </nav>
    `);
});

/* 
Error 404 - página no encontrada 
*/
app.use((req, res) => {
  res.status(404).send(`
    <h1>Página no encontrada</h1>
    <p>Path solicitado: ${req.path}</p>
    <nav>
          <a href="/"> Inicio </a> | 
          <a href="/marketing"> Marketing </a> | 
          <a href="/developers"> Developers </a> | 
          <a href="/QAs"> QAs </a> | 
          <a href="/ventas"> Ventas </a>
    </nav>
  `);
});

app.listen(3000, () => {
  console.log('Express está escuchando en el puerto 3000')
});