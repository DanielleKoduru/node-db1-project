const db = require("../../data/config")

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  return db('account')
    .where("id", id)
    .limit(1)
}

const create = async account => {
  const [id] = await db
    .insert(account)
    .into("account")
  const newAccount = db("account")
    .where("id", id)
    .first()
  return (newAccount)
}

const updateById = async (id, account) => {
  await db("account")
    .where("id", id)
    .update(account)
  const updatedAccount = db("account")
    .where("id", id)
    .first()
  return (updatedAccount)
}

const deleteById = async id => {
  await db("account")
    .where("id", id)
    .del()
  return (`Account ${id} has been deleted`)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
