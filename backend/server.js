import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/user', userRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to the Mercato API");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});