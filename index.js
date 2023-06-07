const express = require('express');
const routerAPI = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi primer server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

routerAPI(app);

app.listen(port, () => {
  console.log('Mi port ' + port);
})
