import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, I am Arin and this is my Node.js App deployed on Render!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
