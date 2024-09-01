const express = require('express');
const cors = require('cors');
const db = require('./config/db'); 
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configura CORS para permitir solicitudes desde tu frontend
app.use(cors({
  origin: 'https://frontcriptomate-1.onrender.com', // La URL donde está alojado tu frontend
}));

// Configura el middleware para manejar JSON
app.use(express.json());

// Usa las rutas del usuario
app.use('/api', userRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error stack:', err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
