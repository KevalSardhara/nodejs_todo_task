import mongoose from '../data/database.js';

// const Schema = mongoose.Schema;
// const schema = new Schema({});

const schema = new mongoose.Schema({
    name: String,
    email: {
        type : String,
        unique : true,
    },
    password: {
        type : String,
        select : false,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
});

const User = mongoose.model("User", schema);

export { User };

