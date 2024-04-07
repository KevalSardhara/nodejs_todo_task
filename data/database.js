import mongoose from 'mongoose';

export const connectDB = () => {
    // Connection URI for MongoDB
    const URL = process.env.MONGO_URI;
    // Database Name
    const dbName = 'backend';

    mongoose.connect(URL, {
        dbName,
    }).then(() => {
        console.log("serevr start here");
    }).catch((e) => {
        console.log("error", e);
    });
}

export default mongoose;
