const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const user = require('./routes/user.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const string =
  'mongodb+srv://zubair:expense@cluster0.bwmkg.mongodb.net/data?retryWrites=true&w=majority';
mongoose
  .connect(string, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log('connection error', err.message);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(cors());
app.use(helmet());

app.use('/', user);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('server listen on ' + PORT);
});
