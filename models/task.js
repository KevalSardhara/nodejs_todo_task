import mongoose from '../data/database.js';

// const Schema = mongoose.Schema;
// const schema = new Schema({});

const schema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    },
    description: {
        type : String,
        required : true,
    },
    isCompleted: {
        type : Boolean,
        default : false,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
});

const Task = mongoose.model("Task", schema);

export { Task };

