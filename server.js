const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const user = require('./data/user');
const deal = require('./data/deal');

app.set('port', process.env.PORT || 3100);
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'its working' });
});

app.post('/authenticate', (req, res) => {
  const { login, password } = req.body;

  if (login === 'vibbraneo' && password === 'vibbraneo')
    return res.status(200).json({ user });
  else return res.status(401).json({});
});

app.post('/authenticate/sso', (req, res) => {
  const { login, app_token } = req.body;

  if (login === 'vibbraneo' && app_token === 'token')
    return res.status(200).json({ user });
  else return res.status(401).json({});
});

app.post('/deal/search', (req, res) => {
  return res.status(200).json(deal);
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
