const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./auth/route/auth');  // Adjust according to your structure
const investmentRoutes = require('./routes/investment');
const winnerRoutes = require('./routes/winner');
const app = express();

mongoose.connect('mongodb://localhost/fashion-trends', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/winner', winnerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
