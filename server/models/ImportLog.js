// Mongoose schema for import logs
const mongoose = require('mongoose');

const importLogSchema = new mongoose.Schema({
  feedSource: String,
  timestamp: Date,
  totalFetched: Number,
  newJobs: Number,
  updatedJobs: Number,
  failedJobs: Number,
  failedReasons: [String],
});

module.exports = mongoose.model('ImportLog', importLogSchema);
