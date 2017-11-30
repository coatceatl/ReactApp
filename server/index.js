const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const User = require('./models/User');
const passportConfig = require('./services/passport');


mongoose.connect('mongodb://localhost:27017/users', {
  useMongoClient: true,
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('server started');
});

