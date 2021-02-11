import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    user: { type: String, unique: true },
    email: { type: String, unique: true },
    pass: { type: String, required: true },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: { createdAt: "Creado", updatedAt: "Actualizado" },
    versionKey: false,
  }
);

userSchema.statics.encryptPass = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pass, salt);
};

userSchema.statics.comparePass = async (pass, recivedPass) => {
  return await bcrypt.compare(pass, recivedPass);
};

export default model("User", userSchema);
