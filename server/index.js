import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import userRouter from "./routes/users.js";
import movieRouter from "./routes/movies.js";

dotenv.config();
const app = express();

// Middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from the back end!" });
});

app.use("/users", userRouter);
app.use("/movies", movieRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
