const db = require('../config/db');

const User = {
  create: async ({ username, email, password }) => {
    const [result] = await db.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password]
    );
    return result.insertId;
  },

  findByEmail: async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },

  findByUsername: async (username) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
  },

  deleteById: async (id) => {
    await db.execute('DELETE FROM users WHERE id = ?', [id]);
  }
};

module.exports = User;
