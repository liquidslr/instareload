
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

require('dotenv').config()

const models = require('./app/models')

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port);

const server = http.createServer(app)



// sync() will create all table if they doesn't exist in database
models.sequelize.sync().then(() => {
  server.listen(port)
  server.on('error', onError)
  server.on('listening', onListening)
})


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



passport.use(new FacebookStrategy({
  clientID: keys.fbclientID,
  clientSecret: keys.fbclientSecret,
  callbackURL: "http://localhost:3000/auth/facebook/callback" // route user is send to after thery grant permission
},
  (accessToken, refreshToken, profile, done, cb) => {
    models.User.create({
      fbId: done.id
    })
    return cb(null, profile);
  }
))


passport.serializeUser(function (user, cb) {
  cb(null, user);
});


passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});


app.use(passport.initialize());
app.use(passport.session())



app.get('/auth/facebook/',
  passport.authenticate('facebook')
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/user', (req, res) => {
  res.render('home', { user: req.user });
})

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});



module.exports = app;



// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   models.User.findOne({
//     where: { id: req.params.id }
//   }).then(user => {
//     done(null, user.id);
//   })



// });

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// )