const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/calorieTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const foodEntrySchema = new mongoose.Schema({
  foodName: String,
  quantity: String,
  calories: Number,
  date: String,
});

const FoodEntry = mongoose.model("FoodEntry", foodEntrySchema);

// API to save food entries
app.post("/api/entries", async (req, res) => {
  try {
    const entry = new FoodEntry(req.body);
    await entry.save();
    res.status(201).send("Entry saved successfully");
  } catch (error) {
    res.status(500).send("Error saving entry: " + error.message);
  }
});

// API to get all entries
app.get("/api/entries", async (req, res) => {
  try {
    const entries = await FoodEntry.find();
    res.json(entries);
  } catch (error) {
    res.status(500).send("Error retrieving entries: " + error.message);
  }
});

// Corrected delete route
app.delete("/api/entries", async (req, res) => {
  // Correct route name
  try {
    await FoodEntry.deleteMany(); // Deletes all entries in the collection
    res.status(200).send("All entries deleted successfully");
  } catch (error) {
    res.status(500).send("Error deleting entries: " + error.message);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
