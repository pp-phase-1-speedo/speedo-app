const express = require('express');
const app = express();
const port = 3000;
app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended : true}))
const router = require('./routes/index'); 

app.get('/', (req, res) => {
    res.send('cek routing')
})
app.use('/testing', router)


app.listen(port, () => {
    console.log(`Running port : ${port}`)
})