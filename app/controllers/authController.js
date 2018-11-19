const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const transporter = require('../../services/nodemailer')
const ip = require('ip')

require('dotenv').config()

const User = require('../models/User')
let url = "http://" + ip.address() + ":3000"

const create = async (req, res) => {
  const { cpf_cnpj, name } = req.body

  try {
    let user = await User.findOne({ cpf_cnpj })

    if (user)
      return res.send({ user })

    const uc_code = Math.floor(Math.random() * 9000000) + 1000000;

    user = await User.create({
      name, cpf_cnpj, uc_code
    })

    return res.send({
      user
    })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: 'Registration failed' })
  }
}

module.exports = {
  create
}
