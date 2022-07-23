const dbConn = require('../../dbConfig/dbConfig');

const NewArrivalModel = (new_arrival) => {
  this.id = new_arrival.id;
  this.name = new_arrival.name;
  this.image = new_arrival.image;
}

NewArrivalModel.getAll = (result) => {
  dbConn.query("SELECT * FROM new_arrival ORDER BY id DESC", (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

NewArrivalModel.getSingleById = (id, result) => {
  dbConn.query("SELECT * FROM new_arrival WHERE id = ?", [id], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

NewArrivalModel.add = (data, image, result) => {
  dbConn.query("INSERT INTO new_arrival (name, image) VALUES (?, ?)", [
    data.name, image
  ], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res)
    }
  })
}

NewArrivalModel.update = (productId, productName, productImage, result) => {
  dbConn.query("UPDATE new_arrival SET name=?,image=? WHERE id=?", [
    productName, productImage, productId
  ], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

NewArrivalModel.updateName = (productId, productName, result) => {
  dbConn.query("UPDATE new_arrival SET name=? WHERE id=?", [
    productName, productId
  ], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

NewArrivalModel.updateImage = (productId, productImage, result) => {
  dbConn.query("UPDATE new_arrival SET image=? WHERE id=?", [
    productImage, productId
  ], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

NewArrivalModel.delete = (id, result) => {
  dbConn.query("DELETE FROM new_arrival WHERE id = ?", [id], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

module.exports = NewArrivalModel;