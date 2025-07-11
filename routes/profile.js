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

/**
 * @swagger
 * /api/profiles:
 *   get:
 *     summary: Get all profiles
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: List of all profiles
 */
router.get('/', profileController.getAllProfiles);

/**
 * @swagger
 * /api/profiles/{id}:
 *   get:
 *     summary: Get a profile by ID
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The profile ID
 *     responses:
 *       200:
 *         description: A single profile
 *       404:
 *         description: Profile not found
 */
// You need to implement getProfileById in your controller
// router.get('/:id', profileController.getProfileById);

/**
 * @swagger
 * /api/profiles:
 *   post:
 *     summary: Create a new profile
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               kin1:
 *                 type: string
 *               kin2:
 *                 type: string
 *               gender:
 *                 type: string
 *               availableDays:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Profile created
 */
router.post('/', upload.single('photo'), profileController.createProfile);

/**
 * @swagger
 * /api/profiles/{id}:
 *   put:
 *     summary: Update a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The profile ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               kin1:
 *                 type: string
 *               kin2:
 *                 type: string
 *               gender:
 *                 type: string
 *               availableDays:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Profile updated
 *       404:
 *         description: Profile not found
 */
router.put('/:id', upload.single('photo'), profileController.updateProfile);

/**
 * @swagger
 * /api/profiles/{id}:
 *   delete:
 *     summary: Delete a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The profile ID
 *     responses:
 *       200:
 *         description: Profile deleted
 *       404:
 *         description: Profile not found
 */
router.delete('/:id', profileController.deleteProfile);

/**
 * @swagger
 * /api/profiles/clear:
 *   get:
 *     summary: Health check for profiles route
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: Profiles route is working
 */
router.get('/clear', (req, res) => {
  res.send('✅ Profiles route is working!');
});
/**
 * @swagger
 * /api/profiles/list/clear:
 *   get:
 *     summary: Health check for list profiles route
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: List Profiles route is working
 */
router.get('/list/clear', (req, res) => {
  res.send('✅ List Profiles route is working!');
});
/**
 * @swagger
 * /api/profiles/create/clear:
 *   get:
 *     summary: Health check for create profile route
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: Create Profile route is working
 */
router.get('/create/clear', (req, res) => {
  res.send('✅ Create Profile route is working!');
});
/**
 * @swagger
 * /api/profiles/edit/clear:
 *   get:
 *     summary: Health check for edit profile route
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: Edit Profile route is working
 */
router.get('/edit/clear', (req, res) => {
  res.send('✅ Edit Profile route is working!');
});
/**
 * @swagger
 * /api/profiles/delete/clear:
 *   get:
 *     summary: Health check for delete profile route
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: Delete Profile route is working
 */
router.get('/delete/clear', (req, res) => {
  res.send('✅ Delete Profile route is working!');
});

module.exports = router; 