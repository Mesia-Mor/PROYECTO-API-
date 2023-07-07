const express = require('express');
const bodyParser = require('body-parser');
const citasRoutes = require('./routes/citasRoutes');

const app = express();
const port = 5003;

app.use(bodyParser.json());
app.use(express.static('public'));

// Conexión a la base de datos de MongoDB Atlas
const mongoose = require('mongoose');
const dbUri = 'mongodb+srv://irina84rodriguez:GbbobkpCpkFUnAiX@proyectoapi.hmctooa.mongodb.net/proyectobackend';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch(error => console.error('Error al conectar a MongoDB Atlas:', error));

// Importar las rutas
const pacientesRoutes = require('./routes/pacientesRoutes');
const doctoresRoutes = require('./routes/doctoresRoutes');

// Configurar las rutas
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/doctores', doctoresRoutes);
app.use('/api/citas', citasRoutes);

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
