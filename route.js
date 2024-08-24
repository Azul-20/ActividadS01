const router = require('express').Router()

router.get('/', (req, res) => {
    res.sendFile('./views/inicio.html', {root:__dirname})
})

router.get('/about', (req, res) => {
    res.sendFile('./views/nosotros.html', {root:__dirname})
})

router.get('/services', (req, res) => {
    res.sendFile('./views/servicios.html', {root:__dirname})
})

router.get('/product', (req, res) => {
    res.sendFile('./views/producto.html', {root:__dirname})
})

router.get('/brands', (req, res) => {
    res.sendFile('./views/marcas.html', {root:__dirname})
})

router.get('/team', (req, res) => {
    res.sendFile('./views/equipo.html', {root:__dirname})
})

router.get('/contact', (req, res) => {
    res.sendFile('./views/contactanos.html', {root:__dirname})
})

module.exports = router