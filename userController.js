const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
};

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).send({ error: 'User not found.' });
    }
    res.send(user);
};

exports.createUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(req.body.username, hashedPassword);
    res.status(201).send({ message: 'User created successfully.', user });
};

exports.updateUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
        username: req.body.username,
        password: hashedPassword
    };
    const updatedUser = await User.update(req.params.id, user);
    res.send({ message: 'User updated successfully.', user: updatedUser });
};

exports.deleteUser = async (req, res) => {
    await User.delete(req.params.id);
    res.status(204).send({ message: 'User deleted successfully.' });
};