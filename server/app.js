import express from "express";
import morgan from "morgan"; // middleware de express
import packagejs from "../package.json";
import productsRoutes from "./routes/productsRoutes";
import authRoutes from "./routes/authRoutes";
import { createRoles } from "./libs/inicialSetup";
import usersRoutes from './routes/userRoutes'

const app = express();
createRoles();

app.set("packagejs", packagejs);

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: app.get("packagejs").name,
    author: app.get("packagejs").author,
    description: app.get("packagejs").description,
    version: app.get("packagejs").version,
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes)

export default app;
