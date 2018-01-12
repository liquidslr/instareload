const http = require('http')
const express = require('express')
const debug = require('debug')('instagram:server');
const path = require('path')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./config/keys')
const routes = require('./routes/index');



const app = express()
const cookieSession = require('cookie-session')
const mongoose = require('mongoose')


require('dotenv').config()
require('./app/models/User')

// const models = require('./app/models')


const User = mongoose.model('users')


const port = normalizePort(process.env.PORT || '5000')
app.set('port', port);

const server = http.createServer(app)



mongoose.connect(keys.mongoUri)


server.listen(port)
server.on('error', onError)
server.on('listening', onListening)


// // sync() will create all table if they doesn't exist in database
// models.sequelize.sync().then(() => {
//   server.listen(port)
//   server.on('error', onError)
//   server.on('listening', onListening)
// })


// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');







// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)

// /**
//  * Normalize a port into a number, string, or false.
//  */

function normalizePort(val) {
  const p = parseInt(val, 10)

  if (isNaN(p)) {
    // named pipe
    return val
  }

  if (p >= 0) {
    // port number
    return p
  }

  return false
}


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}



passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});


passport.use(new FacebookStrategy({
  clientID: keys.fbclientID,
  clientSecret: keys.fbclientSecret,
  callbackURL: "http://localhost:5000/auth/facebook/callback",
  proxy: true,
  profileFields: ['id', 'displayName', 'photos', 'email']// route user is send to after thery grant permission
},
  (accessToken, refreshToken, profile, cb) => {
    User.findOne({ fbId: profile.id }).then((existingUser) => {
      if (existingUser) {
      } else {
        new User({
          fbId: profile.id,
          name: profile.displayName,
        }).save();
      }
    })
    return cb(null, profile);
  }

))


// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session())




app.get('/api/user', (req, res) => {
  require('connect-ensure-login').ensureLoggedIn(),
    res.send(req.user);
});

app.get('/auth/facebook/',
  passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  })
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('http://localhost:3000/profile');
  }
);


app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('http://localhost:3000/');
});



if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



module.exports = app;



