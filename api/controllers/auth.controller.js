import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //Hash the password
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });
    //   console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create User!" });
  }
};
export const login = async (req, res) => {
  //   console.log("Test route");
  //   res.status(200).json({ message: "Test route" });
  res.status(200).json({ message: "Register route" });
};
export const logout = async (req, res) => {
  //   console.log("Test route");
  //   res.status(200).json({ message: "Test route" });
  res.status(200).json({ message: "Register route" });
};
