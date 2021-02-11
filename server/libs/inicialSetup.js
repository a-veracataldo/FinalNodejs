import Role from "../models/Role";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const value = await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "user" }).save(),
    ]);

    console.log(value);
  } catch (error) {
    console.error(error);
  }
};
