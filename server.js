const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers')

//get port where the server us running on
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

//Express HBS engien
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { nombre: 'andres' });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/data', (req, res) => {
    res.send('Hello data');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});