const fs = require("fs");
const path = require("path");

const getAllUser = () => {
  const user = fs.readFileSync(path.join(__dirname, "./user.json"), {
    encoding: "utf-8",
  });
  return JSON.parse(user);
};

const findByName = (name) => getAllUser().find((item) => item.name == name);
const findByIndex = (id) => getAllUser().findIndex((item) => item.id == id);

const insertUser = (user) => {
  try {
    if (findByName(user.name)) return false;
    const db = getAllUser();
    const userInsert = {
      id: db.length,
      ...user,
    };
    db.push(userInsert);
    fs.writeFileSync(
      path.join(__dirname, "./user.json"),
      JSON.stringify(db, null, 4),
      { encoding: "utf-8" }
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const updateUser = (id, newUser) => {
  const user = findByIndex(id);
  if (user) {
    const db = getAllUser();
    db[user] = {
      id: id,
      ...newUser,
    };
    fs.writeFileSync(
      path.join(__dirname, "./user.json"),
      JSON.stringify(db, null, 4),
      { encoding: "utf-8" }
    );
    return true;
  } else {
    return false;
  }
};

const deleteUser = (id) => {
  const user = findByIndex(id);
  if (user) {
    const db = getAllUser();
    const newdb = db.filter((item) => item.id != id);
    fs.writeFileSync(
      path.join(__dirname, "./user.json"),
      JSON.stringify(newdb, null, 4),
      { encoding: "utf-8" }
    );
    return true;
  } else {
    return false;
  }
};

module.exports = { getAllUser, insertUser, updateUser, deleteUser };
