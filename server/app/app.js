const express = require('express');
const cors = require('cors');

const app = express();

//configuracion
app.set('port', 3200);

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use(require('./rutas/routes'));

module.exports = app;