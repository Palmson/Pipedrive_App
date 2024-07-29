const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route to render the form
app.get('/form/:dealId', (req, res) => {
  const { dealId } = req.params;
  res.render('index', { dealId });
});

// Your existing routes...
const submitRouter = require('./routes/submit');
app.use('/submit', submitRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
