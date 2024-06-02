import User from "../models/models.user.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { name, password, email } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = new User({ username: name, password: hashedPassword, email });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
