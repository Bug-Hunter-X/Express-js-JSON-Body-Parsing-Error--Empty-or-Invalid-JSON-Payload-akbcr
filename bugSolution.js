const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Request body is empty');
  }
  try {
    //Further JSON processing if valid JSON is present
    console.log(req.body);
    res.send('Data received');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return res.status(400).send('Invalid JSON payload');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));