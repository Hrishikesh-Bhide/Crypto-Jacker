const express = require('express');
const app = express();
const config = require('config');
var num = 0;
var num2 = config.get('window.increment');;
var ip = config.get('app.ip');
var port = config.get('app.port');
app.set('view engine', 'ejs');
app.listen(port, ip, () => console.log('listening at', ip, ':', port));

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {num, num2});
});

app.post('/success', (req, res) => {
  console.log(req.body);
  num += num2;
  num2 += num2;
  res.render('success');
});
