require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conexión a MySQL
// index.js - CORREGIDO
const db = mysql.createConnection({
  host: process.env.MYSQLHOST,     // Usar la variable de Railway
  user: process.env.MYSQLUSER,     // Usar la variable de Railway
  password: process.env.MYSQLPASSWORD, // Usar la variable de Railway
  database: process.env.MYSQLDATABASE, // Usar la variable de Railway
  port: process.env.MYSQLPORT,         // Usar la variable de Railway
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Backend funcionando');
});




app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
