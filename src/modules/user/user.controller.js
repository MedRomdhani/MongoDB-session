import { userModel } from "../../../database/models/user.model.js";

const getAllUsers = async (req, res) => {
  let users = await userModel.find();
  res.json({ message: "success", users });
};

const addUser = async (req, res) => {
  const { name, email, password, age } = req.body;
  await userModel.insertMany({ name, email, password, age });
  res.json({ message: "success" });
};

const updateUser = async (req, res) => {
  const { _id, name, email, password, age } = req.body;
  let user = await userModel.findByIdAndUpdate(
    { _id },
    { name, email, password },
    { new: true }
  );
  res.json({ message: "success", user });
};

const deleteUser = async (req, res) => {
  const { _id } = req.body;
  await userModel.findByIdAndDelete({ _id });
  res.json({ message: "success" });
};

export { getAllUsers, addUser, updateUser, deleteUser };
