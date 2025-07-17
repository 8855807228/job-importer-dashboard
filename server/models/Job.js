// Mongoose schema for jobs
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  link: String,
  type: String,
  postedAt: Date,
  source: String,
  hash: String, // for deduplication
  updatedAt: Date,
  description: String,
  tags: [String],
});

module.exports = mongoose.model('Job', jobSchema);
