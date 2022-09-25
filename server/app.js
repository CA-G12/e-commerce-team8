
const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./routes');
const app = express();
app.use(cookieParser());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build'));
});

app.use(router)

app.use((err, req, res, next) => {
  console.log(err);
});

module.exports = app;
