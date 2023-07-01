const db = require("../db");
const bcrypt = require("bcrypt");

class AuthService {
  async registration(res, username, surname, password) {
    const userFromTable = await db.query(
      `SELECT * FROM users WHERE username = $1`,
      [username]
    );

    if (userFromTable.rows[0]) {
      return res.json({
        message: `User with name ${userFromTable.rows[0].username} already exist`,
      });
    }

    const hashPassword = await bcrypt.hash(password, 7);
    const createUser = await db.query(
      `INSERT INTO users (username,surname, password) values ($1,$2,$3) RETURNING *`,
      [username, surname, hashPassword]
    );
    return createUser;
  }
}

module.exports = new AuthService();
