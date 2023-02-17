const express = require('express');
const handlebars = require('express-handlebars');

const routes = require('./routes');

const app = express();

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(3000, () => console.log('app is listening on port 3000...'));
