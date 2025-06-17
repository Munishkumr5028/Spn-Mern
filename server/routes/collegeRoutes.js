const express = require('express');
const { getAllColleges, addCollege } = require('../controllers/collegeController');
const router = express.Router();

router.get('/', getAllColleges);
router.post('/', addCollege);

module.exports = router;
