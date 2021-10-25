const express = require("express");
const app = express();

const mensaje = "Hola mundo";

app.get('/', (req, res) => {

  res.send(mensaje);
});

// by param

app.get('/byparam/:a/:b/:c', (req, res) => {

  const a = req.params.a;
  const b = req.params.b;
  const c = req.params.c;
  
  res.send(mensaje +
      ' === by param === ' +
      '  a: ' + a +
      '  b: ' + b +
      '  c: ' + c);

});

// by query
app.get('/byquery/', (req, res) => {

  const a = req.query.a;
  const b = req.query.b;
  const c = req.query.c;

  res.send(mensaje +
      ' === by query === ' +
      '  a: ' + a +
      '  b: ' + b +
      '  c: ' + c);

});

module.exports = app;