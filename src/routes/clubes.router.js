const express = require('express');
const router = express.Router();
const { upload } = require('../services/clubes.service');
const { getClubes, getById, postClub, deleteClub, uploadImage } = require('../controllers/clubes.controller');

// GET all clubes
router.get('/', getClubes);

// GET by id 
router.get('/:id', getById);

// POST club 
router.post('/', postClub);

// DELETE club 
router.delete('/:id', deleteClub);

// UPLOAD image
router.post('/upload/:id', [upload.single("file")], uploadImage);

module.exports = router;
