require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const pageRoute = require('./routes/pageRout.js');
const courseRoute = require('./routes/courseRout.js');
const categoryRoute = require('./routes/categoryRout.js');
const userRoute = require('./routes/userRout.js');

const app = express();

const port = process.env.PORT || 3000;

//Connect DB
mongoose.connect('mongodb+srv://dbUser:a123123@cluster0.ep3ez.mongodb.net/smartedu-db?retryWrites=true&w=majority&appName=Cluster0').then(() => {
  console.log('DB Connected Succesfuly');
});

//Template Engine
app.set('view engine', 'ejs');

//Global Variable
global.userIN = null;

//Middlewares
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: 'mongodb+srv://dbUser:a123123@cluster0.ep3ez.mongodb.net/smartedu-db?retryWrites=true&w=majority&appName=Cluster0',
    }),
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
