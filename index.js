const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://a01079180219:Vw7aLPzEKNDTa8ki@boilerplate.jxu5e.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', {
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

//mongodb+srv://a01079180219:<db_password>@boilerplate.jxu5e.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate

app.get('/', (req, res) => {
  res.send('Hello World! 진솔한 대화')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})