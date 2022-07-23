const dbConn = require("../../dbConfig/dbConfig")

const ContactModel = (contact) => {
  this.address = contact.address;
  this.phone = contact.phone;
  this.email = contact.email;
  this.face3book = contact.facebool;
  this.google_plus = contact.google_plus;
  this.twitter = contact.twitter;
  this.whatsapp = contact.whatsapp;
  this.youtube = contact.youtube;
  this.instagram = contact.instagram;
}

// get address
ContactModel.getAddress = (result) => {
  dbConn.query('SELECT address FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit address
ContactModel.editAddress = (address, result) => {
  dbConn.query('UPDATE contact SET address = ?', [address], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get phone
ContactModel.getPhone = (result) => {
  dbConn.query('SELECT phone FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit phone
ContactModel.editPhone = (phone, result) => {
  dbConn.query('UPDATE contact SET phone = ?', [phone], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get email
ContactModel.getEmail = (result) => {
  dbConn.query('SELECT email FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit email
ContactModel.editEmail = (email, result) => {
  dbConn.query('UPDATE contact SET email = ?', [email], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get facebook
ContactModel.getFacebook = (result) => {
  dbConn.query('SELECT facebook FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit facebook
ContactModel.editFacebook = (facebook, result) => {
  dbConn.query('UPDATE contact SET facebook = ?', [facebook], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get google plus
ContactModel.getGooglePlus = (result) => {
  dbConn.query('SELECT google_plus FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit google plus
ContactModel.editGooglePlus = (googlePlus, result) => {
  dbConn.query('UPDATE contact SET google_plus = ?', [googlePlus], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get twitter
ContactModel.getTwitter = (result) => {
  dbConn.query('SELECT twitter FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit twitter
ContactModel.editTwitter = (twitter, result) => {
  dbConn.query('UPDATE contact SET twitter = ?', [twitter], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get whatsapp
ContactModel.getWhatsapp = (result) => {
  dbConn.query('SELECT whatsapp FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit whatsapp
ContactModel.editWhatsapp = (whatsapp, result) => {
  dbConn.query('UPDATE contact SET whatsapp = ?', [whatsapp], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get youtube
ContactModel.getYoutube = (result) => {
  dbConn.query('SELECT youtube FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit youtube
ContactModel.editYoutube = (youtube, result) => {
  dbConn.query('UPDATE contact SET youtube = ?', [youtube], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get instagram
ContactModel.getInstagram = (result) => {
  dbConn.query('SELECT instagram FROM contact', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// edit instagram
ContactModel.editInstagram = (instagram, result) => {
  dbConn.query('UPDATE contact SET instagram = ?', [instagram], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

module.exports = ContactModel;