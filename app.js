const express = require('express');

const app=express();
let port='8080';
app.listen(port,function(){
    console.log(`Server is listening to ${port}`);
});
app.get('/',(req,res)=>{
res.send('<h1> hello from homepage</h1>');
});

let obj={
    'name':'Abhishek'
}

app.get('/user',(req,res)=>{
    // res.send(obj);
    console.log('hello Abhishek');
    });