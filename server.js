const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`<script src="/js/script.js"></script>`);
});

app.listen(3001, () => {
  console.log(`Server listening at http://localhost:${PORT}.`);
});
