'use strict'
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

const router = require('./routes/index');
app.use(router)

app.get('/', (req, res) => {
    res.render('login')
})
// app.use('/testing', router)

app.listen(port, () => {
    console.log(`Running port : ${port}`)
})