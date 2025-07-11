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





// Server port
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


