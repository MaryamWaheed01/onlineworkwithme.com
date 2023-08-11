const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const formData = require('./data');

const app = express();
const port = 5500; // Change this to the desired port number

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, mail, ContactNo, number } = req.body;
  if (name && mail && ContactNo && number) {
    formData.push({ name, email: mail, contactNo: ContactNo, experience: number });
    console.log(formData); // Just to verify the data in the server's console
    res.redirect('/thankyou.html'); // Redirect to the thank you page after form submission
  } else {
    res.status(400).send('All fields are required!');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
