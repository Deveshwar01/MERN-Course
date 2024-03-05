import express from "express"
const app = express();
import { connectDB } from "./data/database.js"
import libraryRouter from "./routes/library.js"
import userRouter from "./routes/user.js"
import bookRouter from "./routes/Book.js"


// database connection call
connectDB();

// using middleware
app.use(express.json())


// routing
app.use('/api', libraryRouter);
app.use('/api', userRouter);
app.use('/api', bookRouter);

app.listen(4000, () => {
    console.log("Server is working at 4000");
});

