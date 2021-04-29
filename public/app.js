const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('../views/layout')
const { db, Page, User } = require('../models')
const users = require('../routes/users');
const wiki = require('../routes/wiki');

// db.authenticate()
//   .then(() => {
//     console.log('connected to the database');
//   })

// logging
app.use(morgan('dev')); 
// static
app.use(express.static(__dirname + '/public'));

// body parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
  res.redirect('/wiki');
})
app.use('/users', users);
app.use('/wiki', wiki);

app.get('/', (req, res) => {
  res.send((layout('')));
})

async function init () {
  try {
    await Page.sync();
    await User.sync();
  } catch (error) {
    console.log(error);
  }
  const PORT = 8000
  app.listen(PORT, () => {
  console.log('hi there')
  });
}

init();

