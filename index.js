//Frame work
var express=require('express');
var app=express();

//Meadiator
var bodyparser=require('body-parser');
var encode=bodyparser.urlencoded({extended:false});

//Database
var data=[{name:'AJITH R',email:'ajithr97510@gmail.com',age:19,college:'CEG',password:'ajith123'}];
console.log(data[0].email);
//Here a template is ejs file
app.set('view engine','ejs');

//Declaring static files
app.use(express.static('./Static'));

app.get('/',function(req,res){
    res.render('Home');
})

//Login page
app.get('/Login',function(req,res){
    res.render('Login');
})
//Check Login Details
app.post('/check',encode, function(req,res){
    console.log(req.body);
    var val=req.body;
    for(var i=0; i<data.length; i++){
        if(val.email===data[i].email && val.password===data[i].password){
            res.end('You have sucessfully logined '+data[i].name);
        }
    }
    res.end("You have entered Invalid details");
})
//Signup page
app.get('/signup',function(req,res){
    res.render('Sign_up');
})
//Insert signup details
app.post('/insert',encode, function(req,res){
    console.log(req.body);
    data.push(req.body);
    res.render('Login');
})
//listen to port
app.listen(3000);

console.log("Running...")