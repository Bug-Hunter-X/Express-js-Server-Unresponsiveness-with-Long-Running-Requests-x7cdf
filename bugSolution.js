const express = require('express');
const app = express();
app.use((req, res, next) => {
  // some logging or task
  next()
})
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});