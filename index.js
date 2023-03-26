const express = require('express');
const app = express();
const config = require('config');
var num = 0;
var num2 = 1000000000000;
var ip = config.get('app.ip');
var port = config.get('app.port');
app.set('view engine', 'ejs');
app.listen(port, ip, () => console.log('listening at ', port));

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {num, num2});
});

app.post('/success', (req, res) => {
  console.log(req.body);
  num += config.get('window.increment');
  num2 += config.get('window.increment');
  res.render('success');
});
