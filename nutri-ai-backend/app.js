const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder for uploads (PDFs etc.)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const authRoutes = require('./routes/auth');
const dietPlanRoutes = require('./routes/dietPlanRoutes');
const authMiddleware = require('./middleware/authMiddleware');

app.use('/api/auth', authRoutes);
app.use('/api/diet-plan', dietPlanRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Nutri AI backend is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
