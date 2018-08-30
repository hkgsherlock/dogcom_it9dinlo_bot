'use strict';

const express = require('express');
const robots = require('express-robots-txt');
const bodyParser = require('body-parser');

const app = express();

app.use(robots({UserAgent: '*', Disallow: '/'}));

app.get('/', (req, res) => {
  res.redirect('https://www.facebook.com/itdogcom');
});

app.get("/cron/dogcom", (req, res) => {
	res.send("OK").end();
});

app.get('*', (req, res) => {
  res.redirect('https://www.facebook.com/itdogcom');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
