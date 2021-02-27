const accounts = require("../accounts/accounts-model")

exports.checkAccountPayload = () => {
  return (req, res, next) => {
    if (!req.body.name || !req.body.budget) {
      return res.status(400).json({
        message: "name and budget are required"
      })
    } else {
      if (typeof req.body.name !== "string") {
        return res.status(400).json({
          message: "name of account must be a string"
        })
      }
      else if (3 > ((req.body.name).trim().length) || ((req.body.name).trim().length) > 100) {
        return res.status(400).json({
          message: "name of account must be between 3 and 100"
        })
      }
      else if (typeof req.body.budget !== "number") {
        return res.status(400).json({
          message: "budget of account must be a number"
        })
      }
      else if (1000000 < (req.body.budget) || (req.body.budget) < 0) {
        return res.status(400).json({
          message: "budget of account is too large or too small"
        })
      } else {
        next()
      }
    }
  }
}



exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    let allAccounts = await accounts.getAll()
    const name = (req.body.name).trim()

    allAccounts = allAccounts.filter((accountName) => {
      return name === accountName.name
    })
    console.log(allAccounts)

    if (allAccounts.length >= 1) {
      res.status(400).json({
        message: "that name is taken",
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await accounts.getById(req.params.id)
    if (account) {
      req.account = account
      next()
    } else {
      res.status(404).json({
        message: "account not found"
      })
    }
  } catch (err) {
    next(err)
  }
}
