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


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/research_dashboard", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("Connected to MongoDB"))
// .catch(err => console.error("MongoDB connection error:", err));

// // Database Models
// const AuthorSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   department: String,
//   createdAt: { type: Date, default: Date.now }
// });

// const ResearchSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   summary: { type: String, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
//   status: { type: String, enum: ['draft', 'in-progress', 'completed'], default: 'draft' },
//   progress: { type: Number, min: 0, max: 100, default: 0 },
//   createdAt: { type: Date, default: Date.now }
// });

// const ActivitySchema = new mongoose.Schema({
//   type: { type: String, enum: ['research', 'author', 'system'], required: true },
//   title: { type: String, required: true },
//   description: String,
//   referenceId: mongoose.Schema.Types.ObjectId,
//   createdAt: { type: Date, default: Date.now }
// });

// const NotificationSchema = new mongoose.Schema({
//   message: { type: String, required: true },
//   read: { type: Boolean, default: false },
//   type: { type: String, enum: ['info', 'warning', 'alert'], default: 'info' },
//   createdAt: { type: Date, default: Date.now }
// });

// const Author = mongoose.model("Author", AuthorSchema);
// const Research = mongoose.model("Research", ResearchSchema);
// const Activity = mongoose.model("Activity", ActivitySchema);
// const Notification = mongoose.model("Notification", NotificationSchema);

// // Helper function to create activity log
// const logActivity = async (type, title, description, referenceId) => {
//   await Activity.create({ type, title, description, referenceId });
// };

// // Dashboard Data Endpoints
// app.get("/api/dashboard", async (req, res) => {
//   try {
//     const [authorsCount, researchesCount, activities] = await Promise.all([
//       Author.countDocuments(),
//       Research.countDocuments(),
//       Activity.find().sort({ createdAt: -1 }).limit(5)
//     ]);

//     // Calculate average progress
//     const researches = await Research.find({}, 'progress');
//     const avgProgress = researches.reduce((acc, curr) => acc + curr.progress, 0) / researchesCount || 0;

//     res.json({
//       totalAuthors: authorsCount,
//       totalResearches: researchesCount,
//       progressResearches: Math.round(avgProgress),
//       recentActivities: activities
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Authors Endpoints
// app.get("/api/authors", async (req, res) => {
//   try {
//     const authors = await Author.find().sort({ createdAt: -1 });
//     res.json(authors);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/api/authors", async (req, res) => {
//   try {
//     const author = new Author(req.body);
//     await author.save();
//     await logActivity('author', 'New author added', `Author ${author.name} was created`, author._id);
//     res.status(201).json(author);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Research Endpoints
// app.get("/api/researches", async (req, res) => {
//   try {
//     const researches = await Research.find().populate('author').sort({ createdAt: -1 });
//     res.json(researches);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/api/researches", async (req, res) => {
//   try {
//     const research = new Research(req.body);
//     await research.save();
//     await logActivity('research', 'New research added', `Research "${research.title}" was created`, research._id);
//     res.status(201).json(research);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// app.put("/api/researches/:id/progress", async (req, res) => {
//   try {
//     const { progress } = req.body;
//     const research = await Research.findByIdAndUpdate(
//       req.params.id,
//       { progress },
//       { new: true }
//     );
    
//     if (!research) {
//       return res.status(404).json({ error: "Research not found" });
//     }
    
//     await logActivity('research', 'Research progress updated', 
//       `Research "${research.title}" progress updated to ${progress}%`, research._id);
    
//     res.json(research);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Notifications Endpoints
// app.get("/api/notifications", async (req, res) => {
//   try {
//     const notifications = await Notification.find({ read: false }).sort({ createdAt: -1 });
//     res.json(notifications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/api/notifications/count", async (req, res) => {
//   try {
//     const count = await Notification.countDocuments({ read: false });
//     res.json({ count });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/research_dashboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Database Models
const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: String,
  createdAt: { type: Date, default: Date.now }
});

const ResearchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  status: { type: String, enum: ['draft', 'in-progress', 'completed'], default: 'draft' },
  progress: { type: Number, min: 0, max: 100, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const ActivitySchema = new mongoose.Schema({
  type: { type: String, enum: ['research', 'author', 'system'], required: true },
  title: { type: String, required: true },
  description: String,
  referenceId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now }
});

const NotificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  type: { type: String, enum: ['info', 'warning', 'alert'], default: 'info' },
  createdAt: { type: Date, default: Date.now }
});

const Author = mongoose.model("Author", AuthorSchema);
const Research = mongoose.model("Research", ResearchSchema);
const Activity = mongoose.model("Activity", ActivitySchema);
const Notification = mongoose.model("Notification", NotificationSchema);

// Helper function to create activity log
const logActivity = async (type, title, description, referenceId) => {
  await Activity.create({ type, title, description, referenceId });
};

// Dashboard Data Endpoint
app.get("/api/dashboard", async (req, res) => {
  try {
    const [authorsCount, researchesCount, activities] = await Promise.all([
      Author.countDocuments(),
      Research.countDocuments(),
      Activity.find().sort({ createdAt: -1 }).limit(5)
    ]);

    // Calculate average progress
    const researches = await Research.find({}, 'progress');
    const avgProgress = researches.reduce((acc, curr) => acc + curr.progress, 0) / researchesCount || 0;

    res.json({
      totalAuthors: authorsCount,
      totalResearches: researchesCount,
      progressAuthors: authorsCount, // Using count as progress for demo
      progressResearches: Math.round(avgProgress),
      recentActivities: activities
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Authors Count Endpoint
app.get("/api/authors/count", async (req, res) => {
  try {
    const count = await Author.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Researches Count Endpoint
app.get("/api/researches/count", async (req, res) => {
  try {
    const count = await Research.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Notifications Count Endpoint
app.get("/api/notifications/count", async (req, res) => {
  try {
    const count = await Notification.countDocuments({ read: false });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));