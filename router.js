const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/results', controller.getResult)
router.post('/createresult', controller.addResult)
router.post('/updateresult', controller.updateResult)
router.post('/deleteresult', controller.deleteResult)

module.exports = router;