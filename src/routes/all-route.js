'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller-all');

router.get('/:id', controller.get);
router.post('/insert', controller.post);
router.put('/update', controller.update);
router.post('/delete', controller.delete);

module.exports = router;