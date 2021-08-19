const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { login, register } = require("./controllers/auth");

app.post(`/api/login`, login);
app.post(`/api/register`, register);

// document.getElementById("cipherButton").addEventListener("click", () => {
//   button.eventPreventDefault();
//   let phrase = document.getElementById("cipherText");
//   decrypt(phrase);
// });

app.listen(4004, () => console.log(`running on 4004`));
