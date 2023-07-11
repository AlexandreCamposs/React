const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extend: true,
  }),
);

app.use(express.json());

// rotass - endpoints
app.get('/', (req, res) => {
  res.json({ message: 'Primeira rota criada com sucesso!' });
});

app.listen(3000);
