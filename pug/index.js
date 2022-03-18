const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = app.listen(PORT, (req, res) => {
  console.log(
    `El servidor se levantó en el puerto ${server.address().port}`
  );
});

server.on('error', (error) => console.log('Hubo un error ' + error));

const productos = [];

app.get('/', (req, res) => {
  res.render('formulario.pug', { productos });
});

app.get('/productos', (req, res) => {
  res.render('tabla.pug', { productos });
});

app.post('/productos', (req, res) => {
  const { nombre, autor, precio } = req.body;
  productos.push({ nombre, autor, precio });
  console.log(productos);
  res.render('formulario.pug', { productos });
});

app.set('views', './views');
app.set('view engine', 'pug');