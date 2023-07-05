const express = require("express");
const app = express();
const port = 9000;

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola desde el backend de Node.js y Express!");
});

// Otra ruta de ejemplo
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
