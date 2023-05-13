const bcrypt = require('bcrypt');
const db = require('../../utils/db');

function findUserByEmail(email) {
  return db.user.findUnique({
    where: {
      email: email,
    }
  })
}

function createUserByEmailAndPassword(user) {
  user.password = bcrypt.hashSync(user.password, 12);
  return db.user.create({
    data: user,
  });
}

function findUserById(id) {
  return db.user.findUnique({
    where: {
      id: id,
    }
  })
}
module.exports = {
  findUserByEmail,
  findUserById,
  createUserByEmailAndPassword
}