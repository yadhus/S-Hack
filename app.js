const path = require('path');

var port = process.env.PORT || 8080;

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
// app.use('/results', resultsRoutes);

// app.use(errorController.get404);

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
