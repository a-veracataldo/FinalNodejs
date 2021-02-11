import User from "../models/User";
import Role from "../models/Role";

export const createUser = async (req, res) => {
  try {
    const { user, email, pass, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const newUser = new User({
      user,
      email,
      pass,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    //newUser.pass = await User.encryptPass(user.pass);

    // saving the new user
    const savedUser = await newUser.save();

    return res.status(200).json({
      _id: savedUser._id,
      user: savedUser.user,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {};

export const getUser = async (req, res) => {};
