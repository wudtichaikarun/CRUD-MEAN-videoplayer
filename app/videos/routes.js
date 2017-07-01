
// impconst express = require('express');
const express = require('express');
const router = express.Router();

import controller from './controller';

//GET ALL DATA
export function  setup(router){
    router
        .get('/', controller.getAll)
}
