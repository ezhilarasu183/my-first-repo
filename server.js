// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Job = require('./models/Job');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/linkedinClone')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection failed:', err));

// Routes
app.post('/add-job', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
