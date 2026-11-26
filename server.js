
import express from "express";

import httpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
const app = express();


app.use(express.json());

app.use("/student", studentRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Hello from server",
  });
});


app.use((req, res, next) => {
  return next(new httpError("Requested route not found", 404));
});


app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.statusCode || 500).json({
    message: error.message || "Internal server error",
  });
});


const port = 5000;


async function startServer() {
  try {
    const connect = await connectDB();

    if (!connect) {
      throw new Error("Failed to connect database");
    }

    app.listen(port, (err) => {
      if (err) {
        return console.log(err.message);
      }

      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.log("Server Error:", error.message);
  }
}

startServer();
