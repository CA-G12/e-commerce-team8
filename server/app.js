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

app.use('/api/v1',router)

if (NODE_ENV === 'production'){
  app.use(express.static(join(__dirname, '..', 'client', 'build')));

  app.get('*', (_req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.msg || 'something went wrong' })
});

module.exports = app;
