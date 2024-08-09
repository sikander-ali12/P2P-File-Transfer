const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

app.use(express.json());

let ipAddresses = new Set(); // Use a Set to store unique IP addresses

// Endpoint to add IP address
app.post('/api/ip', (req, res) => {
  const { ip } = req.body;
  if (ip) {
      ipAddresses.add(ip);
      res.status(200).send('IP address added');
      console.log("IP added : " + ip);
    
  } else {
    res.status(400).send('IP address missing');
  }
});

// Endpoint to delete IP address
app.delete('/api/ip', (req, res) => {
  const { ip } = req.body;
  if (ip) {
    if (ipAddresses.has(ip)) {
      ipAddresses.delete(ip);
      res.status(200).send('IP address deleted');
    } else {
      res.status(404).send('IP address not found');
    }
  } else {
    res.status(400).send('IP address missing');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
