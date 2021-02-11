import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const registrarse = async (req, res) => {
  const { user, email, pass, roles } = req.body;

  const newUser = new User({ user, email, pass: await User.encryptPass(pass) });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const saveUser = await newUser.save();

  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.status(200).json({ token });
};

export const iniciarSesion = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );

  if (!userFound) return res.status(404).json({ message: "User not found" });

  const matchPass = await User.comparePass(req.body.pass, userFound.pass);

  if (!matchPass)
    return res.status(401).json({ token: null, message: "invalid pass" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });

  console.log(userFound);

  res.json({ token });
};
