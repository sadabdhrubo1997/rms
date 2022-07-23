const dbConn = require('../../dbConfig/dbConfig');

const HeaderSliderModel = (header_slider) => {
  this.id = header_slider.id
  this.image = header_slider.image
}

HeaderSliderModel.getAll = (result) => {
  dbConn.query("SELECT * FROM header_slider ", (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

HeaderSliderModel.getSingle = (id,result) => {
  dbConn.query("SELECT * FROM header_slider WHERE id=?",[id], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

HeaderSliderModel.add = (img,result) => {
  dbConn.query("INSERT INTO header_slider (image) VALUES (?)",[
      img
  ], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

HeaderSliderModel.delete = (id,result) => {
  dbConn.query("DELETE FROM header_slider WHERE id=?",[
      id
  ], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}


module.exports = HeaderSliderModel