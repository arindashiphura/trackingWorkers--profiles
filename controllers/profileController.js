const Profile = require('../models/Profile');
const path = require('path');

// Create a new profile
exports.createProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, kin1, kin2, availableDays, gender } = req.body;
    let photo = '';
    if (req.file) {
      photo = req.file.filename;
    }
    const profile = new Profile({
      photo,
      firstName,
      lastName,
      email,
      phone,
      kin1,
      kin2,
      availableDays: Array.isArray(availableDays) ? availableDays : (availableDays ? [availableDays] : []),
      gender,
    });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a profile
exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, kin1, kin2, availableDays, gender } = req.body;
    let updateData = {
      firstName,
      lastName,
      email,
      phone,
      kin1,
      kin2,
      availableDays: Array.isArray(availableDays) ? availableDays : (availableDays ? [availableDays] : []),
      gender,
    };
    if (req.file) {
      updateData.photo = req.file.filename;
    }
    const profile = await Profile.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all profiles
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a profile
exports.deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 