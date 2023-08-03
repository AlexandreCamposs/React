//para usar o arquivo env
require('dotenv').config();

// conf básica para iniciar api
const express = require('express');
const path = require('path');
const cors = require('cors');

// onde a porta vai rodar
const port = process.env.PORT;

// invocando express
const app = express();

//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// solve cors
app.use(cors({ credentials: true, origin: 'http://locallhost:5000' }));

//upload directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

//DB connection
require('./config/db.js');

// routes
const router = require('./routes/Router.js');

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
