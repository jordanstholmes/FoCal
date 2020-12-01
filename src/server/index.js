const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/sup', (req, res) => {
  res.send('sup, jordan');
});

app.listen(PORT, () => {
   console.log('Sever listening at port ' + PORT);
});
