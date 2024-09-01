const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/db'); 
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = process.env.PORT || 3001; // Usa el puerto del entorno o un puerto por defecto
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configura CORS
app.use(cors({
  origin: 'https://frontcriptomate-1.onrender.com', // Permite solicitudes desde este origen
}));

// Configura el middleware para manejar JSON
app.use(express.json()); // Para manejar solicitudes JSON

// Usa las rutas del usuario antes de servir archivos estáticos
app.use('/api', userRoutes); // '/api' es el prefijo para tus rutas


// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error stack:', err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
