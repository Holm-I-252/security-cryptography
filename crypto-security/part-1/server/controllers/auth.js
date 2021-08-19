let bcryptjs = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      const existing = bcryptjs.compareSync(password, users[i].passHash);
      if (existing) {
        let returnUser = { ...users[i] };
        delete returnUser.passHash;
        console.log(returnUser);
        res.status(200).send(returnUser);
        return;
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body;
    let salt = bcryptjs.genSaltSync(5);
    let passHash = bcryptjs.hashSync(req.body.password, salt);
    let userObj = {
      username,
      email,
      firstName,
      lastName,
      passHash,
    };

    console.log("Registering User");
    console.log(userObj);
    users.push(userObj);
    console.log(users);
    res.status(200).send(req.body);
  },

  // decrypt: (phrase) => {
  //   let letters = [
  //     a,
  //     b,
  //     c,
  //     d,
  //     e,
  //     f,
  //     g,
  //     h,
  //     i,
  //     j,
  //     k,
  //     l,
  //     m,
  //     n,
  //     o,
  //     p,
  //     q,
  //     r,
  //     s,
  //     t,
  //     u,
  //     v,
  //     w,
  //     x,
  //     y,
  //     z,
  //   ];
  //   let date = [float(document.getElementById("cipherDate"))];

  //   console.log(date);
  // },
};
