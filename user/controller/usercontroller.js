const usermodel = require('../models/usermodel');

const createuser = (req,res) => {
  const newuser = req.body;
  res.send('usuário ${newuser.name} criar com sucesso');
}; 

module.exports = {createuser)
