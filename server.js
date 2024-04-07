import { app } from "./app.js";
import { connectDB } from "./data/database.js";
connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`srevre is started -> ${process.env.PORT} and mode is -> ${process.env.NODE_ENV}`);
});
