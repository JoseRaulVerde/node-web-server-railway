const express = require('express')
var hbs = require('hbs');
require('dotenv').config()

const app = express()
const port = process.env.PORT 

 //Handlebars 
hbs.registerPartials(__dirname + '/views/partials');

//Todo: require(hbs)
app.set('view engine', 'hbs');

//servir contenido estatico 
app.use(express.static('public'))


app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'HenrryMoon',
    titulo: 'Curso Node '
  })
})

app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'HenrryMoon',
    titulo: 'Curso Node '
  })})

app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'HenrryMoon',
    titulo: 'Curso Node '
  })})

app.get('*', function (req, res) {
  res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})