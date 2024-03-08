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

app.get('/', function(req,res){
    res.render('index.ejs', {
        'name': ' '
    })
})

app.get('/register', function(req,res){
    res.render('register.ejs')
})


app.post('/', function(req,res){
    var password = req.body.name;
    var hash = '3a185445e2fc3431991c74a63ecd6f78'

    if (md5(password)==hash){
        res.render('index.ejs',{
            'name': 'successful login'
        })
    }
    else{
        res.render('index.ejs',{
            'name': 'unsuccessful login'
        })
    }
   
})

var count = 0;

app.post('/register', function(req,res){

    count++

   users.push(req.body)

    res.render('register.ejs')

    for (let i=0; i<count; i++){
        console.log(users[i]['password'])
    }
    
})



app.listen(3000, function(req,res){
    console.log('server started')
})