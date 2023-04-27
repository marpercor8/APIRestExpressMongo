const mongoose = require('mongoose')


const CONNECTION_URL = 'mongodb://root:example@localhost:27017'

const connection = async () => {
    console.log("Connecting to mongoDB")
    await mongoose.connect(CONNECTION_URL).then(
        () => {
            console.log("Connected to mongoDB")
        }
    ).catch(err => {
        console.log("Error connecting to mongoDB")
        console.log(err)
    })
}

module.exports = connection;