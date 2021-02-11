import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    nombre: String,
    precio: Number,
    descripcion: String,
    marca: String,
    unidades: Number,
  },
  {
    timestamps: { createdAt: "Creado", updatedAt: "Actualizado" },
    versionKey: false,
  }
);

export default model("Product", productSchema);
