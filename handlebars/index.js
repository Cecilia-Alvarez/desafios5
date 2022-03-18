const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

//establecemos la configuración de handlebars
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
  })
)

const productos = []

app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('formulario', {title: 'Formulario'})
})

app.post('/productos', (req, res) => {
    // let body = req.body;
     
    // let res_body = {
    // nombre: body.nombre,
    // autor: body.autor,
    // precio: body.precio,
    // };
    // console.log(res_body) 
    // res.render('formulario', { res_body} );
      const { nombre, autor, precio } = req.body;
      productos.push({ nombre, autor, precio });
      console.log(productos);
      res.render('formulario', { productos });
    });
    // });

// app.get('/productos', (req, res) => {
//     let templateText = $("#tableTemplate").html();
//     let tableTemplate = Handlebars.compile(templateText);
//     $("#productos").html(tableTemplate({ array: productos }));
//     res.render('tabla', {productos})
// })
/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en servidor ${error}`))