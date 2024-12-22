
const express = require('express');
const fs = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Middleware  parsing JSON
  server.use(express.json());

  // POST API  saving data
  server.post('/save-data', (req, res) => {
    const data = req.body;

    // Save data in a JSON file
    fs.writeFile('userData.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving data' });
      }
      res.status(200).json({ message: 'Data saved successfully' });
    });
  });

  // Handling all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
