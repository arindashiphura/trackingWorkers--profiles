const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Create profile
router.post('/', upload.single('photo'), profileController.createProfile);

// Get all profiles
router.get('/', profileController.getAllProfiles);

// Update profile
router.put('/:id', upload.single('photo'), profileController.updateProfile);

// Delete profile
router.delete('/:id', profileController.deleteProfile);

// Health/status endpoints for profiles
router.get('/clear', (req, res) => {
  res.send('✅ Profiles route is working!');
});
router.get('/list/clear', (req, res) => {
  res.send('✅ List Profiles route is working!');
});
router.get('/create/clear', (req, res) => {
  res.send('✅ Create Profile route is working!');
});
router.get('/edit/clear', (req, res) => {
  res.send('✅ Edit Profile route is working!');
});
router.get('/delete/clear', (req, res) => {
  res.send('✅ Delete Profile route is working!');
});

module.exports = router; 