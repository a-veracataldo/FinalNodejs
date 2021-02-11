import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://averac:averac@proyectofinal.1xavq.mongodb.net/Almacen",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    }
  )
  .then((db) => console.log("DB is conected"))
  .catch((error) => console.log(error));
