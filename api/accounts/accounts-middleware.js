const accountsModel = require("./accounts-model")

exports.checkAccountPayload = () => {
   return (req, res, next) => {
    if (!req.body.name || !req.body.budget) {
      return res.status(400).json({
        message: "name and budget are required"
      })
   }
   if (typeof req.body.name != "string" || req.body.name === 0) {
     return res.status(400).json({ 
       message: "name of account must be a string" 
     })
   }
   if (100 < ((req.body.name).trim) < 3) {
     return res.status(400).json({ 
       message: "name of account must be between 3 and 100" 
      })
   }
   if (isNaN(req.body.budget)) {
     return res.status(400).json({ 
       message: "budget of account must be a number" 
      })
   }
   if (1000000 < (req.body.budget) < 0) {
     return res.status(400).json({ 
       message: "budget of account is too large or too small" 
      })
   }
   next()
  }
}

//?? Still not sure about this one
exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const account = await accountsModel.getAll()
    if (account.name === req.body.name) {
      return (req.body.name)
    } else {
      res.status(400).json({ 
        message: "that name is taken" 
      })
    }
  } catch (err) {
    next (err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await accountsModel.getById (req.params.id)
    if (account) {
      req.account = account
      next()
    } else {
      res.status(404).json({ 
        message: "account not found" 
      })
    }
  } catch (err){
    next (err)
  }
}
