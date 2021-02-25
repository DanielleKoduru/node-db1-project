const router = require('express').Router()
const accounts = require("./accounts-model")
const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require("../accounts/accounts-middleware")

// #1 `[GET] /api/accounts` returns an array of accounts (or an empty array if there aren't any).
router.get('/api/accounts', async (req, res, next) => {
  try {
    const allAccounts = await accounts.getAll()
      res.status(200).json(allAccounts)
  } catch (err) {
      next(err)
  }
})

// #2 `[GET] /api/accounts/:id` returns an account by the given id.
router.get('/api/accounts/:id', checkAccountId(), async (req, res, next) => {
  try {
   
} catch (err) {
    next(err)
}
})

// #3 `[POST] /api/accounts` returns the created account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
router.post('/api/accounts', checkAccountPayload(), checkAccountNameUnique(), async (req, res, next) => {
  try {
        
  } catch (err) {
      next(err)
  }
})

// #4 `[PUT] /api/accounts/:id` returns the updated account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
router.put('/api/accounts/:id', checkAccountPayload(), checkAccountNameUnique(), async (req, res, next) => {
  try {
    
  } catch (err) {
      next(err)
  }
});

// #5 `[DELETE] /api/accounts/:id` returns the deleted account.
router.delete('/api/accounts/:id', async (req, res, next) => {
  try {
   
  } catch (err) {
    next(err)
  }
})

// #6
router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
