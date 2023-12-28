import { usersModel } from "../model/UserModel.js";

export const getAllUsers = async (req, res) => {
  const user = await usersModel.find({});
  res.status(200).json(user);
};

export const getByIdUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usersModel.findById(id);
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  const { username, email, password, age, isMarried } = req.body;
  const newUser = new usersModel({
    username,
    email,
    password,
    age,
    isMarried,
  });
  await newUser.save();
  res.send("User Added");
};

export const updateUserByID = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, age, isMarried } = req.body;
  const user = await usersModel.findByIdAndUpdate(id, {
    username,
    email,
    password,
    age,
    isMarried,
  });
  res.send(user);
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersModel.findByIdAndDelete(id);
  res.send(user);
};
