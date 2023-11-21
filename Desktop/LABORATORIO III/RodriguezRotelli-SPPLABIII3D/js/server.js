
const express = require('express');
const app = express();
const PORT = 3000; // Puedes cambiar el puerto según tu preferencia

// Middleware para procesar datos JSON
app.use(express.json());

// Rutas para operaciones CRUD
app.get('/monstruos', (req, res) => {
  // Lógica para obtener todos los monstruos
  res.json(/* Lista de monstruos */);
});

app.post('/monstruos', (req, res) => {
  // Lógica para crear un nuevo monstruo
  const nuevoMonstruo = req.body; // Los datos del monstruo estarán en el cuerpo de la solicitud
  res.json(/* Respuesta de creación exitosa */);
});

app.put('/monstruos/:id', (req, res) => {
  // Lógica para actualizar un monstruo por ID
  const idMonstruo = req.params.id;
  const datosActualizados = req.body;
  res.json(/* Respuesta de actualización exitosa */);
});

app.delete('/monstruos/:id', (req, res) => {
  // Lógica para eliminar un monstruo por ID
  const idMonstruo = req.params.id;
  res.json(/* Respuesta de eliminación exitosa */);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});