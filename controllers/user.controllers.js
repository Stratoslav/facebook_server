const db = require("../db");
class UserController {
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
      res.json(user.rows[0]);
    } catch (e) {
      console.log(e);
    }
  }
  async getAllUsers(req, res) {
    try {
      const user = await db.query(`SELECT * FROM users`);
      res.json(user.rows);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
