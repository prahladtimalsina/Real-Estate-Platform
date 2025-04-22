import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

    //check if the password is correct

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Invalid Credentials!" });

    const age = 1000 * 60 * 60 * 24 * 7; // 1 week

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: age,
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true,
        // sameSite: "strict",
        maxAge: age, // 1 day
      })
      .status(200)
      .json({ message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login!" });
  }
  //   res.status(200).json({ message: "Test route" });
  // res.status(200).json({ message: "Register route" });
};
export const logout = async (req, res) => {
  
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
};
