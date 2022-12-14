const express = require("express");
const tareas = require("./routes/tareas");
const pokemones = require("./routes/pokemones.route");
const auth = require("./routes/auth");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.use("/tareas", tareas);
app.use("/pokemones", pokemones);
app.use("/auth", auth);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
