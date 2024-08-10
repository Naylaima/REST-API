const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findByUsername(username);
    if (!user) {
        return res.status(400).send({ success: false, statuscode: 400, error: 'Invalid username or password.' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send({ success: false, statuscode: 400, error: 'Invalid username or password.' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ success: true, statuscode: 200, message: 'User berhasil login', token });
};

exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create(username, hashedPassword);
    res.send({ success: true, statuscode: 200, message: 'User registered successfully.' });
};