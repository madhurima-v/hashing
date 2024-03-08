import express from 'express'
import bodyParser from 'body-parser'
import md5 from 'md5'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use(express.static(__dirname+'\\public'))

app.use(bodyParser.urlencoded({ extended: true }))


var users = [];
var hashing = {};

app.get('/', function(req,res){
    res.render('index.ejs', {
        'name': ' '
    })
})

app.get('/register', function(req,res){
    res.render('register.ejs')
})


app.post('/', function(req,res){

    var name = req.body.name;
    var validuser = 0;

    for (let i=0; i<count; i++){

        if (name==users[i]['userid']) {
            validuser=1
        }
    } 
    
    if(validuser==0){
        console.log('no users')
    }
    else{
        console.log('user exist')
    }

   res.render('index.ejs',{
    'name': 'testing'
   })
   
})

var count = 0;

app.post('/register', function(req,res){

    count++

    var name = req.body.name
    var userid = req.body.userid
    var hash = md5(req.body.password)

    hashing ['name'] = name
    hashing ['userid'] = userid
    hashing ['hash'] = hash


    users.push(structuredClone(hashing))

    res.render('register.ejs')
})



app.listen(3000, function(req,res){
    console.log('server started')
})