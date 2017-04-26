const app = require('./app');

app.service('users').create({
    email:'momme@juergensen.me',
    password: '123'
}).then(res => {
  console.log(res)
  process.exit();
})
.catch(err => {
  console.log(err);
  process.exit();
})
