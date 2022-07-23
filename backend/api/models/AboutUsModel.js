const dbConn = require('../../dbConfig/dbConfig');

const NewArrivalModel = (about_us) => {
  this.aboutUs = about_us.aboutUs;
  this.howItBegan = about_us.howItBegan;
  this.ourCoreValues = about_us.ourCoreValues;
  this.ourMission = about_us.ourMission;
  this.ourVision = about_us.ourVision;
}



NewArrivalModel.getAll = (result) => {
  dbConn.query("SELECT * FROM about_us ", (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}




/*
aboutUs
howItBegan
ourCoreValues
ourMission
ourVision
*/




NewArrivalModel.update = (data, result) => {
  dbConn.query("UPDATE about_us SET aboutUs=?,howItBegan=?,ourCoreValues=?,ourMission=?,ourVisio" +
    "n=? WHERE id=1",
    [
      data.aboutUs, data.howItBegan, data.ourCoreValues, data.ourMission, data.ourVision
    ], (err, res) => {
      if (err) {
        result(err, null)
      } else {
        result(null, res)
      }
    })
}

module.exports = NewArrivalModel;