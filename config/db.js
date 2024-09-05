const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306, // Usa 3306 por defecto si no está especificado
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test de conexión
db.getConnection()
  .then(connection => {
    console.log('Conexión a la base de datos exitosa');
    connection.release(); // Libera la conexión
  })
  .catch(err => {
    console.error('Error de conexión a la base de datos:', err.message);
  });

module.exports = db;
