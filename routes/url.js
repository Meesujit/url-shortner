const express = require('express')
const {handleGenerateNewShortURl, handleGetAnalytics} = require('../controllers/url')

const router = express.Router();

router.post('/', handleGenerateNewShortURl);

router.get('/analytics', handleGetAnalytics)


module.exports = router;