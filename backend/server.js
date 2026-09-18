const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
const allowedOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const localOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://localhost:8080',
  'http://127.0.0.1:8080',
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server requests and local development.
    if (!origin || localOrigins.includes(origin) || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  credentials: true
}));
app.use(express.json());

// Serve static files from uploads directory. On Vercel this points to the
// temporary writable /tmp location used by the upload handler.
const uploadDir = process.env.VERCEL
  ? '/tmp/getsetai-uploads'
  : path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadDir));

// MongoDB Connection
let mongoConnectionPromise;

function connectDatabase() {
  if (mongoose.connection.readyState === 1) return Promise.resolve();
  if (!process.env.MONGODB_URI) {
    return Promise.reject(new Error('MONGODB_URI is not configured'));
  }

  if (!mongoConnectionPromise) {
    mongoConnectionPromise = mongoose.connect(process.env.MONGODB_URI)
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => {
        mongoConnectionPromise = undefined;
        console.error('MongoDB connection error:', err);
        throw err;
      });
  }

  return mongoConnectionPromise;
}

// Ensure every request has a database connection, including Vercel cold starts.
app.use(async (req, res, next) => {
  try {
    await connectDatabase();
    next();
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed' });
  }
});

// Routes
app.use('/api/auth', require('./routes/auth'));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'GetSetAI Backend Server is running' });
});

const PORT = process.env.PORT || 5000;

// Vercel imports the Express app as a serverless function.
// Keep listen() for local development only.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
