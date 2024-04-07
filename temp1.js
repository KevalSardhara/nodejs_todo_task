// Import mongoose module
import mongoose from 'mongoose';

// Connection URI for MongoDB
const uri = 'mongodb://localhost:27017/your_database_name';

// Function to connect to MongoDB
async function connectToMongo() {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the connectToMongo function
connectToMongo();



const mainPage = (req, res) => {
    res.end("<h1>Successfully data add</h1>");
};
app.get("/", mainPage);


