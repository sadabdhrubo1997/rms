const dbConn = require('../../dbConfig/dbConfig')

const MessageModel = (message) => {
  this.name = message.name;
  this.email = message.email;
  this.contact = message.contact;
  this.message = message.message
}

// get all message
MessageModel.getAll = (result) => {
  dbConn.query('SELECT message_id,name,email,contact FROM message ORDER BY message_id DESC', (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// get single message by id
MessageModel.getSingleMessage = (id, result) => {
  dbConn.query('SELECT * FROM message WHERE message_id = ?', [id], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

//send message
MessageModel.sendMessage = (data, result) => {
  dbConn.query('INSERT INTO message (name,email,contact, message) VALUES (?,?,?,?)', [data.name, data.email, data.contact, data.message],(err,res)=>{
    if (err) {
        result(err,null)
    }else{
        result(null,res)
    }
  })
}

// delete message
MessageModel.delete = (id, result) => {
  dbConn.query('DELETE FROM message WHERE message_id = ?', [id], (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

module.exports = MessageModel;