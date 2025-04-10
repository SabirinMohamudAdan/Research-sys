// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/research_db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const ResearchSchema = new mongoose.Schema({
//   title: String,
//   summary: String,
//   author: String,
// });

// const Research = mongoose.model("Research", ResearchSchema);

// app.get("/api/research", async (req, res) => {
//   const data = await Research.find();
//   res.json(data);
// });

// app.post("/api/research", async (req, res) => {
//   const { title, summary, author } = req.body;
//   const newResearch = new Research({ title, summary, author });
//   await newResearch.save();
//   res.status(201).json({ message: "Research added" });
// });

// app.listen(6000, () => console.log("Server running on port 500"));


