import User from "../models/models.user.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

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
// console.log(process.env.SECRET_TOKEN);

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });

    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "Invalid credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.SECRET_TOKEN);

    console.log("value of token is:", token);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
