const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const { NODE_ENV } = process.env
const app = express();


app.use(cookieParser());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (NODE_ENV === 'production'){
  app.use('/*',express.static(join(__dirname, '..', 'client', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build'));
  });
}

app.use(router)

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.msg || 'something went wrong' })
});

module.exports = app;
