const express = require('express');
const fs= require('fs');
const path = require('path');
const port = 80;
const bodyparser=require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dancecontact');
const schema = new mongoose.Schema({
    name :String,
    age :String,
    email :String,
    number:String,
    address:String
})

const mod = mongoose.model('Contact',schema)
// const fs = require('fs');
const app = express();

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'view'));

app.get('/',(req,res)=>{
    // const content = {'title':'Dance Website...',"content":"____"};
    res.render('home.pug');
});
app.get('/contact',(req,res)=>{
     const content = {"content":"Contact Us"};
    res.render('contact.pug',content);
});
app.post('/contact',(req,res)=>{
    var myData = new mod(req.body); 
    myData.save()
    res.render('contact.pug',{"content":"Submitted Sucessfully..."});
})

app.listen(port,()=>{
    console.log(`started at http://127.0.0.1:${port}`);
})