const express = require('express')
const app = express()
const PORT = 8080

const router = express.Router()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const productos = []
const server = app.listen(PORT, () => {
  console.log('servidor levantado en el puerto ' + server.address().port)
})

server.on('error', (error) => console.log(`hubo un error ${error}`))

app.set('view engine', 'ejs')
app.set("views", __dirname + "/views");

app.get('/', (req, res) => {
  res.render('formulario', { productos })
})

app.post('/productos', (req, res) => {
  console.log(req.body)
  productos.push(req.body)
  res.render('formulario')
})

app.get('/productos', (req, res) => {
  console.log(productos)
  res.render('tabla', {productos})
})