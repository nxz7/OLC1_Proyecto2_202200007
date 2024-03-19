const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Server working')
})

router.post('/Ejecutar', (req, res) => {
    const textoRecibido = req.body.texto;
    console.log('Texto recibido en el servidor:', textoRecibido);
    res.send('Texto recibido correctamente');
});

module.exports = router

