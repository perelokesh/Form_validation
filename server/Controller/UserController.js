import User from '../Models/UserModel.js';


const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    console.log("data from client:", savedUser)
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ Error: error });
  }
};
const viewUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({Error: error });
  }
};

// Edit and upadte user data
const editUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

//Update user
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ Error: error });
  }
};

//Delete users
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export default {createUser, viewUsers, deleteUser, updateUser, editUser}




