const uuid = require("uuid");
const path = require("path");
const db = require("../db");
class FileUploader {
  async saveFile(file) {
    // console.log(file);
    const fileName = uuid.v4() + ".jpg";
    const filePath = path.resolve("./static", fileName);
    file.mv(filePath);
    return fileName;
  }
}

module.exports = new FileUploader();
