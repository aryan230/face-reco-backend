import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import cors from "cors";
import path from "path";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
// ** MIDDLEWARE ** //
const whitelist = ["http://localhost:3000", "http://localhost:8080"];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
// app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use("/api/image", imageRoutes);
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Api is running");
  });
}
const PORT = process.env.PORT;
app.listen(5000, console.log("Server running on port 5000"));
