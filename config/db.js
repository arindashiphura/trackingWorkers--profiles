const mongoose = require('mongoose');

console.log('DATABASE_LOCAL:', process.env.DATABASE_LOCAL); // Debug log

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_LOCAL, {
      
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.error('Exiting process due to DB connection failure...');
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
