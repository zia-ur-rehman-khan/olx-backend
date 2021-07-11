const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT;
const cors = require('cors')
const userRoute = require('./module/user/userRouter')
const addRoute = require('./module/adds/addRouter')
const dbHelper = require("./dbHelper/dbHelper")


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json(
))


app.use("/users", userRoute)
app.use("/add", addRoute)
// app.use(
//     res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   res.header('Access-Control-Allow-Methods', '*')
// )





app.listen(port, (err) => {

    if (err) {
        console.log(err)
        return
    }
    console.log("server start succesfully!!!!")
    dbHelper.dbConnector()
})