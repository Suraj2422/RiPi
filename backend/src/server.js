import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB Error:", err));
