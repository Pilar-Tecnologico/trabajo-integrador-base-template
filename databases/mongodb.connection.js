const mongoose = require('mongoose');
const config = require('config');
const connectionString = config.get('databases.mongodb.connectionString');

async function connectMongoDb(){
    try {
        console.log("conectado a clubes_db");
        return mongoose.connect(connectionString);
    } catch (error) {
        console.log("NO conectado a DB");
    }
}

module.exports = { connectMongoDb }