const db = require("../db");
const bcrypt = require("bcrypt");
const authService = require("../services/auth.services.js");
class AuthController {
  async registration(req, res) {
    try {
      const { username, surname, password } = req.body;
      if (password.length < 4 || password.length > 16) {
        return res.json({ message: "Password length must be from 4 to 16" });
      }
      const createUser = await authService.registration(
        res,
        username,
        surname,
        password
      );

      res.status(201).json(createUser.rows[0]);
    } catch (e) {
      console.log("REGISTRATION", e);
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    const user = await db.query(`SELECT * FROM users WHERE username = $1`, [
      username,
    ]);

    if (!user) {
      res.json({ message: "user with such name doesn't exist" });
    }
    if (!user.rows[0]) {
      return res.json({ message: `User with name ${username} doesn't exist` });
    }

    const comparePassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );
    if (!comparePassword) {
      return res.json({ message: `Wrong password` });
    }
    res.json(user.rows[0]);
    try {
    } catch (e) {
      console.log("LOGIN", e);
    }
  }
  async logout(req, res) {
    try {
    } catch (e) {
      console.log("LOGOUT", e);
    }
  }
}

module.exports = new AuthController();
