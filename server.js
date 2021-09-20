const express = require('express');

const app=express();

// app.use(express.json());
// app.get('/',(req,res)=>{
//     console.log("homePage");
// })
app.use(express.json());

app.use(express.static('public'));
// ye public folder me jo index.html ki file hogi he usko open krr dega

const userRouter=express.Router();
const authRouter=express.Router();
app.use('/user',userRouter);
app.use('/auth',authRouter);
userRouter
.route('/')
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);

authRouter
.route('/')
.get(getPassword);

app.get('user_all',(req,res)=>{
    res.redirect('/user');
});
let user=[];

function getUser  (req,res){
       res.json(user);
        }
function createUser(req,res){
    user=req.body;
    // console.log(req.body);
    res.send('data has been added succesfully');
}
function updateUser (req,res){
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];
    }
    res.json(user);
};
//delete 
// app.delete('/user',deleteUser);
function deleteUser(req,res){
    user={};
    res.json(user);
    // res.send('ussr has been deleted');
}
//param route
// app.get('/user/:id',getUserById);
function getUserById(req,res){
    console.log(req.params);
    res.json(req.params.id);
}
function getPassword(req,res){
    res.sendFile('./public/forgetPassword.html',{root:__dirname});
}


app.use((req,res)=>{
    res.sendFile('public/404.html',{root:__dirname})
});
        


let port=5000;
app.listen(port, function(){
    console.log(`Server listening to port:${port}`);
});

