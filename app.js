const usersData = require("./usersData")
const express = require('express');
const app = express();

function filtrarData(specialty) {
    return usersData.filter(user => user.specialty === specialty);
  }

  function filtrar(array) {
    return array.map(user => {
        const properties = Object.entries(user).map(([key, value]) => `${key}: ${value}`).join(', ');
        return `<li>${properties}</li>`;
    }).join('');
}
  
app.get(`/`,(req,res)=>{
    res.send(`<h1>Home</h1>
                <a href="/marketing">Marqueting</a>
                <a href="/ventas">Ventas</a>
                <a href="/QAs">QAs</a>
                <a href="/developers">Developers</a>
                <a href="/Otros">404</a>`)
});

app.get('/marketing', (req, res) => {
    const filtroMarketing = filtrarData('marketing');
    const itemsList = filtrar(filtroMarketing);

    res.send(`
        <h1>Marketing</h1>
        <a href="/">Home</a>
        <h3>Número de personas: ${filtroMarketing.length}</h3>
        <ul>${itemsList}</ul>
    `)
});

app.get('/ventas', (req, res) => {
    const filtroVentas = filtrarData('ventas');
    const itemsList = filtrar(filtroVentas);

    res.send(`
        <h1>Ventas</h1>
        <a href="/">Home</a>
        <h3>Número de personas: ${filtroVentas.length}</h3>
        <ul>${itemsList}</ul>
    `);
});

app.get('/QAs', (req, res) => {
    const filtroQAs = filtrarData('QAs');
    const itemsList = filtrar(filtroQAs);

    res.send(`
        <h1>QAs</h1>
        <a href="/">Home</a>
        <h3>Número de personas: ${filtroQAs.length}</h3>
        <ul>${itemsList}</ul>
    `);
});

app.get('/developers', (req, res) => {
    const filtroDevelopers = filtrarData('developers');
    const itemsList = filtrar(filtroDevelopers);
    res.send(`
        <h1>Developers</h1>
        <a href="/">Home</a>
        <h3>Número de personas: ${filtroDevelopers.length}</h3>
        <ul>${itemsList}</ul>
    `);
});
app.use((req,res)=>{
    res.status(404).send(`<h1>Página no encontrada</h1>
                               <a href="/">Home</a>`)
});

app.listen(3000, ()=>{
    console.log(`Escuchando en el puerto 3000`);
});


