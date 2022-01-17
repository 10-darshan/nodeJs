const express = require('express');
const app = express();
const fs = require('fs');

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [];
fs.readFile('./userData.json', 'utf-8', function (error, usersJson) {
  users = JSON.parse(usersJson);
})

app.get('/', function (req, res) {
  res.send("welcome");
})

app.post('/login', function (req, res) {
  let result = users.find(user => user.username == req.body.username);
  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({
        message: 'Login succesful '
      })
    }
    else {
      res.status(200).send({
        message: 'Password Incorrect '
      })
    }
  }
  else {
    res.status(200).send({
      message: 'User not found '
    })
  }
});

app.post('/register', function (req, res) {
  if (users.find(user => user.username == req.body.username))
    res.status(200).send({
      message: 'Already Registered'
    });
  else {
    users = users.concat({
      username: req.body.username,
      password: req.body.password
    })
    const usersJson = JSON.stringify(users);
    fs.writeFile('./userData.json', usersJson, function (error) {
      if (error)
        res.status(200).send({
          message: 'Registration Failed'
        });
      else
        res.status(200).send({
          message: 'Registered Succesfully '
        })
    });
  }
});

app.listen(9000, function () {
  console.log('server running ...');
});