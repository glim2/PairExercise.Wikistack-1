const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('../views/layout')
const { db, Page, User } = require('../models')

// db.authenticate()
//   .then(() => {
//     console.log('connected to the database');
//   })

async function init () {
  try {
    await Page.sync();
    await User.sync();
  } catch (error) {

  }
}

// logging
app.use(morgan('dev'));

// static
app.use(express.static(__dirname + '/public'));

// body parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send((layout('')));
})

const PORT = 1337
app.listen(PORT, () => {
  console.log('hi there')
});
