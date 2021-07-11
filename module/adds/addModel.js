let mongoose = require("mongoose");

const addSchema = new mongoose.Schema({
  category: String,
  condition: String,
  discription: String,

  price: String,
  location: String,
  userName: String,
  userID: String,
  productImage: [],
  createdAt: { type: Date, default: Date.now },
});

const addModel = new mongoose.model("add", addSchema);

module.exports.addProductDetailesInDb = (addDetailes) => {
  return new Promise((resolve, reject) => {
    let addinstance = new addModel(addDetailes);
    addinstance.save((err, add) => {
      if (err) {
        console.log(err, "error hai bhai");
        return reject(err);
      }
      resolve(add);
    });
  });
};

module.exports.getAllAddsFromDb = (queiry) => {
  return new Promise((resolve, reject) => {
    addModel.find(queiry,(err, adds) => {
      if (err) {
        console.log(err, "error hai bhai");
        return reject(err);
      }
      resolve(adds);
    });
  });
};


module.exports.deleteAddFromDb = (queiry) => {

  return new Promise((resolve, reject) => {
    addModel.deleteOne(queiry,(err, deleted) => {
      if (err) {
        console.log(err, "error hai bhai");
        return reject(err);
      }
      resolve(deleted);
    });
  });
};

