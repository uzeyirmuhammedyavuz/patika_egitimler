const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const app = express();
const photoController = require('./controllers/photoControlles.js');
const pageController = require('./controllers/pageController.js');

const port = process.env.PORT || 5000;

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

app.listen(port, () => {
  //connect db
  mongoose
    .connect(
      'mongodb+srv://uzeyiryavuz:Uzeyir.54@cluster1.nziuo.mongodb.net/pcat-db?retryWrites=true&w=majority&appName=Cluster1'
    )
    .then(() => {
      console.log('db connect');
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Server is running on port ${port}`);
});
