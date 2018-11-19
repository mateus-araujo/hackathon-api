const Suggestion = require('../models/Suggestion')

const create = async (req, res) => {
  try {
    const { text } = req.body

    const suggestion = await Suggestion.create({ text })

    return res.send({ suggestion })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: 'Error on save Suggestion' })
  }
}

module.exports = {
  create
}
