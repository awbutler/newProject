const express = require('express')
const router = express.Router()

const { practiceFunction, yolo } = require('../controllers/happyController')

router.get('/', practiceFunction)
router.get('/even/:num', yolo)

module.exports = router
