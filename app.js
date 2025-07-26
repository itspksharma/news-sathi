const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const moment = require('moment');
app.locals.moment = moment;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/news'));

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
