const db = require("../db");

class PostsControllers {
  async createPost(req, res) {
    try {
      const { title, text, user_id } = req.body;
      //   const { id } = req.params;
      if (title.length === 0 || text.length === 0) {
        return res
          .json({ message: "Content length must be more than 0 symbols" })
          .status(204);
      }
      const newPost = await db.query(
        `INSERT INTO posts (title, text, user_id) values ($1, $2, $3) RETURNING *`,
        [title, text, user_id]
      );
      res.json(newPost.rows[0]);
    } catch (e) {
      console.log(e);
    }
  }
  async deletePost(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(404).json({ message: "Something went wrong" });
      }
      const deletedPost = await db.query(`DELETE FROM posts WHERE id = $1`, [
        id,
      ]);
      res.json(deletedPost.rows[0]);
    } catch (e) {
      console.log(e);
    }
  }
  async updatePost(req, res) {
    try {
      const { title, text, id } = req.body;
      if (title.length === 0 || text.length === 0) {
        return res
          .json({ message: "Content length must be more than 0 symbols" })
          .status(204);
      }
      const updatePost = await db.query(
        `UPDATE posts SET title = $1, text = $2 WHERE id = $3`,
        [title, text, id]
      );
      res
        .json({ message: "post update successfully" })
        .send(updatePost.rows[0]);
    } catch (e) {
      console.log(e);
    }
  }
  async getAllPosts(req, res) {
    const { id } = req.params;
    const allPosts = await db.query(`SELECT * FROM posts WHERE user_id = $1`, [
      id,
    ]);
    res.json(allPosts.rows);
    try {
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new PostsControllers();
