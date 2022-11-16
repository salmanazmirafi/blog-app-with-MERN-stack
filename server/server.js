import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
dotenv.config();
app.use(morgan("common"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hi I'm Route",
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server running on port ${port} 🔥`);
