//import express from 'express'
//import fs from 'fs'
//import bodyParsr from 'body-parser'
//import path from 'path'

const express = require('express');
const fs = require('fs');
const bodyParsr = require('body-parser');
const path = require('path');

//for call folder app
function setupRoutes(app){
    const APP_DIR = `${__dirname}/app`
    const features = fs.readdirSync(APP_DIR).filter(
        file => fs.statSync(`${APP_DIR}/${file}`).isDirectory()
    )

    features.forEach(feature => {
        const router = express.Router()
        const routes = require(`${APP_DIR}/${feature}/routes.js`)

        routes.setup(router)
        app.use(`/${feature}`, router)
    })
}

export function setup () {
    const port = 3000
    const app = express()

    app.use(express.static(path.join(__dirname, 'public')))
    app.use(bodyParsr.urlencoded({extended: true}))
    app.use(bodyParsr.json())
    setupRoutes(app)
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    })
    app.listen(port, function(){
        console.log("server running on localhost:" + port);
    })
}