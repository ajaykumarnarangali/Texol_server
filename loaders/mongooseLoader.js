const mongoose = require('mongoose');

exports.mongooseLoader = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to DB:', mongoose.connection.name);
        console.log("database connected successfully");
    } catch (error) {
        console.log("database connection failed");
    }
}