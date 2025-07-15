// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const connectDB = require('./config/db');


// const app = express();
// // Middleware to handle CORS
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.use(express.json());

// connectDB();

// // Import profile routes
// const profileRoutes = require('./routes/profile');

// // Use profile routes
// app.use('/api/profiles', profileRoutes);

// // Health/status routes for profiles
// app.get('/api/profiles/clear', (req, res) => {
//   res.send('✅ Profiles route is working!');
// });
// app.get('/api/profiles/list/clear', (req, res) => {
//   res.send('✅ List Profiles route is working!');
// });
// app.get('/api/profiles/create/clear', (req, res) => {
//   res.send('✅ Create Profile route is working!');
// });
// app.get('/api/profiles/edit/clear', (req, res) => {
//   res.send('✅ Edit Profile route is working!');
// });
// app.get('/api/profiles/delete/clear', (req, res) => {
//   res.send('✅ Delete Profile route is working!');
// });

// // Serve upload folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// const PORT = process.env.PORT || 9000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

 




// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static file support (uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  
})
.then(() => console.log('✅ MongoDB Atlas connected'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1); // Stop the app if DB fails
});

// Routes
const profileRoutes = require('./routes/profile');
app.use('/api/profiles', profileRoutes);

// Root health check route
app.get('/', (req, res) => {
  res.send('Worker Profile API is running...');
});

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Worker Profile API',
      version: '1.0.0',
      description: 'API documentation for Worker Profile project',
    },
    servers: [
      {
        url: 'https://trackingworkers-profiles.onrender.com', // Change to your deployed URL when needed
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Server port
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


