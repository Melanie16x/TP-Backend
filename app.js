const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const Usuario = require('./scr/models/usuario.model');
const Post = require('./scr/models/post.model');
const Comentario = require('./scr/models/comentario.model');

const { DBConexion } = require('./database');

DBConexion();

const app = express();

dotenv.config();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(require('./scr/routes/usuario.route'));
app.use(require('./scr/routes/post.route'));
app.use(require('./scr/routes/comentario.route'));

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))