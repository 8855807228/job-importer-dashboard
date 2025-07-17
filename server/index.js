// Main Express server setup
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const importRoutes = require('./routes/import');
const logRoutes = require('./routes/logs');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', importRoutes);
app.use('/api', logRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
