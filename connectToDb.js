const mongoose = require('mongoose');
const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://tusherahmed8:tusher1995@cluster0.i1jstzi.mongodb.net/", {
            // useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}
module.exports =connectToDB;