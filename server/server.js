const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", 'data:'],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  })
);

app.get('/', (req, res) => {
  res.render('index', { dealId: null });
});

const submitRouter = require('./routes/submit');
app.use('/submit', submitRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
