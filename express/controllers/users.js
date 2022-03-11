const data = require("../data");

exports.users = (req, res) => {
  console.log(data.users);
  res.send(data);
};

exports.users_id = (req, res) => {
  //Para obtener el id
  const { id } = req.params;
  const user = data.users.find((user) => user.id === Number(id));
  if (!user) return res.sendStatus(404);
  res.send(user);
};
