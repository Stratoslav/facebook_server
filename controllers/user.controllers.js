const db = require("../db");
const fileUploader = require("../services/fileUploader.services.js");

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
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
      res.json(user.rows[0]);
    } catch (e) {
      console.log(e);
    }
  }
  async createUserData(req, res) {
    try {
      const {
        city,
        status_user,
        age,
        position,
        followers = 0,
        following = 0,
        lookingforajob = false,
      } = req.body;
      const { id } = req.params;

      await fileUploader.saveFile(image);
      const { image = "" } = req.files;

      const createUserData = await db.query(
        `INSERT INTO user_data (image, city, status, age, position, followers, following, lookingforajob, user_id) values ($1,$2,$3,$4,$5,$6,$7,$8, $9) RETURNING *`,
        [
          image,
          city,
          status_user,
          age,
          position,
          followers,
          following,
          lookingforajob,
          id,
        ]
      );

      res.json(createUserData.rows[0]);
    } catch (e) {
      console.log("createUserData:", e);
    }
  }
  async getDataUser(req, res) {
    try {
      const { id } = req.params;
      const userData = await db.query(
        `SELECT * FROM user_data WHERE user_id = $1`,
        [id]
      );
      res.json(userData.rows[0]);
    } catch (e) {
      console.log("getDataUser:", e);
    }
  }
  async updateUserData(req, res) {
    try {
      const {
        city,
        status_user,
        age,
        position,
        followers = 0,
        following = 0,
        lookingforajob = false,
        // image,
      } = req.body;
      const { id } = req.params;
      // const { image = "" } = req.files;
      // console.log(image);
      // await fileUploader.saveFile(image);
      const upateUserData = await db.query(
        `UPDATE user_data SET  city = $1, status = $2, age = $3, position = $4, followers = $5, following = $6, lookingforajob = $7 WHERE user_id = $8 RETURNING *`,
        [
          city,
          status_user,
          age,
          position,
          followers,
          following,
          lookingforajob,
          id,
        ]
      );
      res.json(upateUserData.rows[0]);
    } catch (e) {
      console.log("getDataUser:", e);
    }
  }

  async uploadAvatarUser(req, res) {
    try {
      const { image } = req.files;

      const { id } = req.params;

      const imageFromFolder = await fileUploader.saveFile(image);
      // console.log(imageFromFolder);
      const setAvatar = await db.query(
        `UPDATE user_data SET image = $1 WHERE user_id = $2`,
        [imageFromFolder, id]
      );
      res.json(setAvatar.rows[0]);
    } catch (e) {
      console.log("uploadAvatarUser:", e);
    }
  }
}

module.exports = new UserController();
