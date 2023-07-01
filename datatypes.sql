
CREATE TABLE user_data(
    id SERIAL PRIMARY KEY,
    age SMALLINT,
    image  VARCHAR(255),
    city  VARCHAR(255),
    status  VARCHAR(255),
    position  VARCHAR(255),
    followers  INT,
    following INT,
    lookingForAJob BOOLEAN,
       user_id INTEGER,
 FOREIGN KEY (user_id) REFERENCES users (id)
);


 CREATE TABLE posts(
id INT PRIMARY KEY,
 title  VARCHAR(255),
 text TEXT,
    user_id INTEGER,
 FOREIGN KEY (user_id) REFERENCES users (id)
);