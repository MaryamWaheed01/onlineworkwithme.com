const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

// Handle other routes (optional)
router.get('/about', (req, res) => {
  res.sendFile('about.html', { root: __dirname + '/public' });
});

router.get('/services', (req, res) => {
  res.sendFile('services.html', { root: __dirname + '/public' });
});

router.get('/contactus', (req, res) => {
  res.sendFile('contactus.html', { root: __dirname + '/public' });
});

// Handle 404 Not Found
router.use((req, res) => {
  res.status(404).send('Page not found.');
});

module.exports = router;
