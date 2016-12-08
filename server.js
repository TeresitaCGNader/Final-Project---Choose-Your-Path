var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
var port = process.env.PORT || 3000;

/*
 * Read info about the MySQL connection from the environment and use it to
 * make the connection.
 */
 var mysqlHost = 'mysql.cs.orst.edu';
 var mysqlUser = 'cs290_guzmannt';
 var mysqlPassword = '1287';
 var mysqlDB = 'cs290_guzmannt';
var mysqlConnection = mysql.createConnection({
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDB
  });
/*
 * Make a connection to our MySQL database.  This connection will persist for
 * as long as our server is running.
 */
// mysqlConnection.connect(function(err) {
//   if (err) {
//     console.log("== Unable to make connection to MySQL Database.")
//     throw err;
//   }
// });

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

app.get('people/home.html', function (req, res) {
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

app.get('/OurGame.html', function (req, res) {
  res.render('OurGame-page', {
    pageTitle: 'A Day Without Dragons'
  });
});

app.get('/OurGame', function (req, res) {
  res.render('OurGame-page', {
    pageTitle: 'A Day Without Dragons'
  });
});

// Render the game page for the root URL path ('/dialog1.html').
app.get('/dialog.html', function (req, res) {
  res.render('dialog-page', {
    pageTitle: 'Dialog'
  });
});

app.get('/dialog1.html', function (req, res) {
  res.render('dialog1-page', {
    pageTitle: 'Dialog #1'
  });
});

app.get('/dialog11.html', function (req, res) {
  res.render('dialog11-page', {
    pageTitle: 'Dialog #1.1'
  });
});

app.get('/dialog12.html', function (req, res) {
  res.render('dialog12-page', {
    pageTitle: 'Dialog #1.2'
  });
});

app.get('/dialog13.html', function (req, res) {
  res.render('dialog13-page', {
    pageTitle: 'Dialog #1.3'
  });
});

app.get('/dialog2.html', function (req, res) {
  res.render('dialog2-page', {
    pageTitle: 'Dialog #2'
  });
});

app.get('/dialog21.html', function (req, res) {
  res.render('dialog21-page', {
    pageTitle: 'Dialog #2.1'
  });
});

app.get('/dialog22.html', function (req, res) {
  res.render('dialog22-page', {
    pageTitle: 'Dialog #2.2'
  });
});

app.get('/dialog23.html', function (req, res) {
  res.render('dialog23-page', {
    pageTitle: 'Dialog #2.3'
  });
});

app.get('/dialog3.html', function (req, res) {
  res.render('dialog3-page', {
    pageTitle: 'Dialog #3'
  });
});

app.get('/dialog31.html', function (req, res) {
  res.render('dialog31-page', {
    pageTitle: 'Dialog #3.1'
  });
});

app.get('/dialog32.html', function (req, res) {
  res.render('dialog32-page', {
    pageTitle: 'Dialog #3.2'
  });
});

app.get('/dialog33.html', function (req, res) {
  res.render('dialog33-page', {
    pageTitle: 'Dialog #3.3'
  });
});

app.get('/ending1.html', function (req, res) {
  res.render('ending1-page', {
    pageTitle: 'Ending #1'
  });
});

app.get('/ending2.html', function (req, res) {
  res.render('ending2-page', {
    pageTitle: 'Ending #2'
  });
});

app.get('/ending3.html', function (req, res) {
  res.render('ending3-page', {
    pageTitle: 'Ending #3'
  });
});
/*
 * Render the people page for the URL path '/people'.
 */
app.get('/people', function (req, res) {

  /*
   * Initiate a database query for all of our people in the database.  We'll
   * respond to the requesting client from within the callback of the MySQL
   * query.
   */
  mysqlConnection.query('SELECT * FROM people', function (err, rows) {

    if (err) {

      /*
       * Send an error response if there was a problem fetching the people
       * from the DB.
       */
      console.log("== Error fetching people from database:", err);
      res.status(500).send("Error fetching people from database: " + err);

    } else {

      /*
       * If we successfully fetched the people, use the data fetched from the
       * DB to build an array to pass to Handlebars for rendering, and then
       * do the rendering.
       */
      var people = [];
      rows.forEach(function (row) {
        people.push({
          userid: row.userid,
          name: row.name,
          is65OrOlder: row.age >= 65
        });
      });

      res.render('games-page', {
        pageTitle: 'Famous People',
        people: people
      });

    }

  });

});

/*
 * Use a dynamic route to render a page for each individual person.
 */
app.get('/people/:person', function (req, res, next) {

  /*
   * Initiate a database query for all of our people in the database.  We'll
   * respond to the requesting client from within the callback of the MySQL
   * query.
   */
  mysqlConnection.query('SELECT * FROM people WHERE userid = ?', [ req.params.person ], function (err, rows) {

    if (err) {

      /*
       * Send an error response if there was a problem fetching the person
       * from the DB.
       */
      console.log("== Error fetching person (", req.params.person, ") from database:", err);
      res.status(500).send("Error fetching person from database: " + err);

    } else if (rows.length >= 1) {

      /*
       * If we got at least one row (should be exactly 1), then we found the
       * requested person.  Fetch that person's photos as well.
       */
      var person = rows[0];

      mysqlConnection.query('SELECT * FROM photos WHERE userid = ?', [ req.params.person ], function (err, rows) {

        if (err) {

          /*
           * Send an error response if there was a problem fetching the photos
           * from the DB.
           */
          console.log("== Error fetching photos for person (", req.params.person, ") from database:", err);
          res.status(500).send("Error fetching photos from database: " + err);

        } else {

          /*
           * Put each of the photos we fetched from the DB into an array to
           * be passed along to Handlebars.
           */
          var photos = [];
          rows.forEach(function (row) {
            photos.push({
              url: row.url,
              caption: row.caption
            });
          });

          // Render the page, sending all the needed info to Handlebars.
          res.render('OurGame-page', {
            pageTitle: person.name,
            person: {
              userid: person.userid,
              name: person.name,
              age: person.age,
              job: person.job,
              photos: photos
            }
          });

        }

      });

    } else {

      /*
       * If there wasn't info for the requested person in the DB (i.e. if we
       * didn't get any rows back from our query), then fall through to a 404.
       */
      next();

    }

  });

});

app.post('/people/:person/add-photo', function (req, res, next) {

  /*
   * If the POST body contains a photo URL, then add the new photo to the
   * person's photos in the DB and respond with success.  Otherweise, let the
   * client know they made a bad request.
   */
  if (req.body && req.body.url) {
    mysqlConnection.query(
      'INSERT INTO photos (userid, url, caption) VALUES (?, ?, ?)',
      [ req.params.person, req.body.url, req.body.caption ],
      function (err, result) {
        if (err) {
          /*
           * Send an error response if there was a problem inserting the photos
           * into the DB.
           */
          console.log("== Error inserting photos for person (", req.params.person, ") from database:", err);
          res.status(500).send("Error inserting photos itnto database: " + err);
        }
        res.status(200).send();
      });
  } else {
    res.status(400).send("Person photo must have a URL.");
  }

});

// If we didn't find the requested resource, send a 404 error.
app.get('*', function(req, res) {
  res.status(404).render('404-page', {
    pageTitle: '404'
  });
});

/*
 * Make a connection to our MySQL database.  This connection will persist for
 * as long as our server is running.  Start the server listening on the
 * specified port if we succeeded in opening the connection.
 */
mysqlConnection.connect(function(err) {
  if (err) {
    console.log("== Unable to make connection to MySQL Database.")
    throw err;
  }
  app.listen(port, function () {
    console.log("== Listening on port", port);
  });
});
