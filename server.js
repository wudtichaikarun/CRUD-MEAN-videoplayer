const express = require('express');
const bodyParsr = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParsr.urlencoded({extended: true}));
app.use(bodyParsr.json());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'pubilc/index.html'));
});

app.listen(port, function(){
    console.log("server running on localhost:" + port);
});