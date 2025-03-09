const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const config = require('./config/key');

const { User } = require("./models/User");

// // application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 함 
// app.use(bodyParser.urlencoded({extended: true}));

// // application/json 으로 된 데이터를 분석해서 가져올 수 있게 함
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

//mongodb+srv://a01079180219:<db_password>@boilerplate.jxu5e.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate

app.get('/', (req, res) => res.send('Hello world~ 그냥 하는거지 뭐 :|'))

app.post('/register', (req, res) => {

  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  user.save()
        .then((userInfo) => res.status(200).json({ success: true }))
        .catch((err) => res.json({ success: false, err }));
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))