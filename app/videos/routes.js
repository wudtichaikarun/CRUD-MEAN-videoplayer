
// impconst express = require('express');
const express = require('express');
const router = express.Router();

import controller from './controller';

//GET ALL DATA
    router
        .get('/videos', controller.getAll)

module.exports = router;