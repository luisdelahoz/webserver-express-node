const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const puerto = process.env.PORT || 3000; 

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.render('home', {
        nombre: 'Luis de la hoz'
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        nombre: 'Luis de la hoz'
    });
});

app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}`);
});
