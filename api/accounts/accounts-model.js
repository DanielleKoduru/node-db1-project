const db = require("../../data/db-config")

const getAll = () => {
  return db.select("*").from('accounts')
}

const getById = id => {
  return db.select("*")
    .from('accounts')
    .where("id", id)
    .limit(1)
}

const create = async account => {
  const [id] = await db
    .insert({
      name: account.name,
      budget: account.budget,
    })
    .into("accounts")
  const newAccount = db("accounts")
    .where("id", id)
    .first()
  return newAccount
}

const updateById = async (id, account) => {
  await db("accounts")
    .update({
      name: account.name,
      budget: account.budget,
    })
    .where("id", id)
  const updatedAccount = db("accounts")
    .where("id", account.id)
    .first()
  return updatedAccount
}

const deleteById = async id => {
  await db("accounts")
    .where("id", id)
    .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
