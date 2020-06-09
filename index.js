const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

const customers = [
  {
    id: 1,
    first_name: 'visarut',
    last_name: 'phusua'
  },
  {
    id: 2,
    first_name: 'john',
    last_name: 'haa'
  },
  {
    id: 3,
    first_name: 'dev',
    last_name: 'doo'
  }
];

const clients = [
  {
    id: 1,
    first_name: 'Haha',
    last_name: 'Hehe'
  },
  {
    id: 2,
    first_name: 'Lala',
    last_name: 'Lili'
  }
];

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({"message": "Hello API"});
});
app.get('/api/v1/customers', (req, res) => {
  res.json(customers);
});

app.get('/api/v1/customers/:id', (req, res) => {
  res.json(customers[req.params.id]);
});

app.get('/api/v2/clients', (req, res) => {
  res.json(clients);
});

app.get('/api/v2/clients/:id', (req, res) => {
  res.json(clients[req.params.id]);
});

app.listen(9999, () => {
  console.log(`Server started!`);
});