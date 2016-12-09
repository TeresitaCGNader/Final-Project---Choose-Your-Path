var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var usersData = require('./dialogs-data');
var port = process.env.PORT || 3000;


/*
 * Set up Express to use express-handlebars as the view engine.  This means
 * that when you call res.render('page'), Express will look in `views/` for a
 * file named `page` (express-handlebars will recognize the .handlebars
 * extension), and it will use express-handlebars to render the content of that
 * file into HTML.
 *
 * Here, we're also setting express-handlebars to use 'main' as the default
 * layout.  This means that, if we can res.render('page'), express-handlebars
 * will take the content from `views/page.handlebars` and plug it into the
 * {{{body}}} placeholder in `views/layouts/main.handlebars`.
 */
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

// Parse all request bodies as JSON.
app.use(bodyParser.json());

// Serve static files from public/.
app.use(express.static(path.join(__dirname, 'public')));

// Render the home page for the root URL path ('/').
app.get('/', function (req, res) {
  res.render('home-page', {
    pageTitle: 'Home'
  });
});

// Render the home page for the root URL path ('/home').
app.get('/home', function (req, res) {
  res.render('home-page', {
    pageTitle: 'Home'
  });
});

// Render the home page for the root URL path ('/home.html').
app.get('/home.html', function (req, res) {
  res.render('home-page', {
    pageTitle: 'Home'
  });
});

// Render the about page for the root URL path ('/about').
app.get('/about', function (req, res) {
  res.render('about-page', {
    pageTitle: 'About'
  });
});

// Render the about page for the root URL path ('/about.html').
app.get('/about.html', function (req, res) {
  res.render('about-page', {
    pageTitle: 'About'
  });
});

// Render the game page for the root URL path ('/games').
app.get('/games', function (req, res) {
  res.render('games-page', {
    pageTitle: 'Games'
  });
});

// Render the game page for the root URL path ('/games.html').
app.get('/games.html', function (req, res) {
  res.render('games-page', {
    pageTitle: 'Games'
  });
});

// Render the OurGame page for the root URL path ('/OurGame.html').
app.get('/OurGame.html', function (req, res) {
  res.render('OurGame-page', {
    pageTitle: 'A Day Without Dragons'
  });
});

// Render the OurGame page for the root URL path ('/OurGame').
app.get('/OurGame', function (req, res) {
  res.render('OurGame-page', {
    pageTitle: 'A Day Without Dragons'
  });
});

/*
 * Use a dynamic route to render a page for each individual dialog. Provide
 * that dialog's data to Handlebars so it can fill out the dialog-page template.
 */
app.get('/dialogs-data/:dialog', function (req, res, next) {
    var dialog = usersData[req.params.dialog];

    if (dialog){
		res.render('dialog-page',{
    		dialog:dialog
        });
	}
    else {
        next();
    }
});

// Render the ending1 page for the root URL path ('/ending1.html').
app.get('/ending1.html', function (req, res) {
  res.render('ending1-page', {
    pageTitle: 'Ending #1'
  });
});

// Render the ending2 page for the root URL path ('/ending2.html').
app.get('/ending2.html', function (req, res) {
  res.render('ending2-page', {
    pageTitle: 'Ending #2'
  });
});

// Render the ending3 page for the root URL path ('/ending3.html').
app.get('/ending3.html', function (req, res) {
  res.render('ending3-page', {
    pageTitle: 'Ending #3'
  });
});

// If we didn't find the requested resource, send a 404 error.
app.get('*', function(req, res) {
  res.status(404).render('404-page', {
    pageTitle: '404'
  });
});

 // Listen on the specified port.
 app.listen(port, function () {
   console.log("== Listening on port", port);
 });
