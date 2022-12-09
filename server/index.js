import express from 'express';
import jwt from 'jsonwebtoken'; // модуль для шифрования

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  } else console.log('listening on port ' + PORT);
});

app.get('/api', (req, res) => {
  res.json({
    message: "Hello from backend!",
  })
})