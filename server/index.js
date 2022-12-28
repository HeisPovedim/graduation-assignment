// #: Libs
import mysql from 'mysql';
import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


// ?: Konfiguration
const PORT = process.env.PORT || 5000;
const conn = mysql.createConnection({ // присоединение к БД
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'school',
})

conn.connect( error => { // проверка на успешное присоединение к БД
  if (error) {
    console.log(error);
    return error;
  } else console.log('Connection to database!');
})

app.listen(PORT, (error) => { // слушатель нашего порта
  if (error) {
    console.log(error);
    return error;
  } else console.log('listening on port ' + PORT);
})

app.get("/news", (req, res) => {
  const query = "SELECT * FROM news";
  conn.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})