const ContactModel = require("../models/ContactModel");

// get adderss
exports.getAddress = (req, res) => {
  ContactModel.getAddress((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].address)
    }
  })
}

// edit address
exports.editAddress = (req, res) => {
  ContactModel.editAddress(req.body.address, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}

// get phone
exports.getPhone = (req, res) => {
  ContactModel.getPhone((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].phone)
    }
  })
}

// edit phone
exports.editPhone = (req, res) => {
  ContactModel.editPhone(req.body.phone, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}

// get email
exports.getEmail = (req, res) => {
  ContactModel.getEmail((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].email)
    }
  })
}

// edit email
exports.editEmail = (req, res) => {
  ContactModel.editEmail(req.body.email, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}

// get facebook
exports.getFacebook = (req, res) => {
  ContactModel.getFacebook((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].facebook)
    }
  })
}

// edit facebook
exports.editFacebook = (req, res) => {
  ContactModel.editFacebook(req.body.facebook, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}

// get facebook
exports.getGooglePlus = (req, res) => {
  ContactModel.getGooglePlus((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].google_plus)
    }
  })
}

// edit facebook
exports.editGooglePlus = (req, res) => {
  ContactModel.editGooglePlus(req.body.google_plus, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}

// get twitter
exports.getTwitter = (req, res) => {
  ContactModel.getTwitter((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].twitter)
    }
  })
}

// edit twitter
exports.editTwitter = (req, res) => {
  ContactModel.editTwitter(req.body.twitter, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}

// get whatsapp
exports.getWhatsapp = (req, res) => {
  ContactModel.getWhatsapp((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].whatsapp)
    }
  })
}

// edit whatsapp
exports.editWhatsapp = (req, res) => {
  ContactModel.editWhatsapp(req.body.whatsapp, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}

// get youtube
exports.getYoutube = (req, res) => {
  ContactModel.getYoutube((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].youtube)
    }
  })
}

// edit youtube
exports.editYoutube = (req, res) => {
  ContactModel.editYoutube(req.body.youtube, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}

// get instagram
exports.getInstagram = (req, res) => {
  ContactModel.getInstagram((err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Intnernal Server Error"})
    } else {
      res
        .status(201)
        .json(result[0].instagram)
    }
  })
}

// edit instagram
exports.editInstagram = (req, res) => {
  ContactModel.editInstagram(req.body.instagram, (err, result) => {
    if (err) {
      res
        .status(204)
        .json({message: "Internal server error"})
    } else {
      if (!(result.affectedRows)) {
        res
          .status(203)
          .json({message: "Not Updated"})
      } else {
        res
          .status(201)
          .json({message: "Updated Sueeceesfully..."})
      }
    }
  })
}
