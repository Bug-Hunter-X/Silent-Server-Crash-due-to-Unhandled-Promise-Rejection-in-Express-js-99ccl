const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(error => {
    // Error handling missing here. This will cause the server to crash silently
    console.error('Error:', error);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might cause an error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});