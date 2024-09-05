const mysql = require('mysql2/promise');
require('dotenv').config();

// Configura la conexión a la base de datos usando variables de entorno
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

// Prueba de conexión y manejo de errores
async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log('Conexión a la base de datos exitosa');
    connection.release(); // Libera la conexión después de la prueba
  } catch (err) {
    console.error('Error de conexión a la base de datos:', err.message);
  }
}

// Ejecuta la prueba de conexión
testConnection();

module.exports = db;
