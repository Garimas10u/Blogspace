import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO).then(
  ()=>{
    console.log("Mongo is connected");
  }
)
.catch((err)=>{
  console.log(err);
})


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
