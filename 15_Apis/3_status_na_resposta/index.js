const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extend: true,
  }),
);

app.use(express.json());

// rotass - endpoints
app.post('/createproduct', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name) {
    res.status(422).json({ message: 'O campo nome deve estar preechido' });

    // return usado para parar a execução caso tenha tido erro
    return;
  }

  console.log(name);
  console.log(price);

  res
    .status(201)
    .json({ message: `O produto ${name} foi criado com sucesso!` });
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Primeira rota criada com sucesso!' });
});

app.listen(3000);
