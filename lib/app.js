const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

// Built in middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5500', 'https://alchemy-oauth-demo.netlify.app'],
    credentials: true,
  })
);
// App routes
app.use('/api/v1/users', require('./controllers/users'));
app.use('/api/v1/github', require('./controllers/github'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
