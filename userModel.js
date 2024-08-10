const db = require('../config/db');

class User {
    static async create(username, password) {
        const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
        return result;
    }

    static async findByUsername(username) {
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0];
    }

    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async update(id, user) {
        const [result] = await db.query('UPDATE users SET username = ?, password = ? WHERE id = ?', [user.username, user.password, id]);
        return result;
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
        return result;
    }

    static async findAll() {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    }
}

module.exports = User;