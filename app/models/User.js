const mongoose = require('../../database')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  uc_code: {
    type: String,
  },
  cpf_cnpj: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
  },
})

const User = mongoose.model('User', UserSchema)

module.exports = User
