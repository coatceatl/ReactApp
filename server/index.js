const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/User');
const passportConfig = require('./services/passport');


mongoose.connect('mongodb://localhost:27017/users', {
  useMongoClient: true,
});

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('server started');
});

