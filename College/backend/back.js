const express = require("express")
const path = require("path")
const dotenv = require('dotenv')
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })
const cors = require("cors")
const app = express()
const connectdb = require('./config/connectdb')
const studentModel = require('./model/studentModel')

connectdb()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, () => {
    console.log(`App running on ${process.env.PORT} in ${process.env.PROCESS_ENV}`)
})

app.post('/Registration', (req, res) => {
    const { email } = req.body
    studentModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already email is registered")
            } else {
                studentModel.create(req.body)
                    .then(students => res.json(students))
            }
        })
});

app.post('/Login', (req, res) => {
    const { email, password } = req.body
    studentModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("Username name not found")
            }
        })
})