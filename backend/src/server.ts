import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { login, register } from "./controllers/authController";
import { createEvent, deleteEvent, getEvents } from "./controllers/eventController";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta para la página principal (raíz)
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando correctamente!");
});
app.post("/register", register);
app.post("/login", login);
app.post("/create/event", createEvent);
app.get("/get/event", getEvents);
app.delete("/delete/event/:id", deleteEvent);



// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("✅ MongoDB Conectado"))
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

// Iniciar el servidor en el puerto 5000
// app.listen(5000, () => console.log("🚀 Servidor corriendo en puerto 5000"));
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));