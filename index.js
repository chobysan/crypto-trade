const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const app = express();

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(routes);

mongoose.set('strictQuery', false)
// change db name
mongoose.connect(`mongodb://127.0.0.1:27017/crypto`)

app.listen(3000, () => console.log('app is listening on port 3000...'));
