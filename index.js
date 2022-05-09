const fs = require('fs');
const express = require('express');
const app = express();

const host = '127.0.0.1';
const port = '2325';
//static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:"true"}));
//Express server creation and stufff
app.get("/",(req,res)=>{
    res.status(200).render('index.html');
});

app.post("/",(req,res)=>{
    console.log(req.body);
    const name=req.body.name;
    const age=req.body.age;
    const phno=req.body.phno;
    const add=req.body.add;
    const role=req.body.role;
    const fronttech=req.body.fronttech;
    const backtech=req.body.backtech;
    const programmingtech=req.body.programmingtech;
    const descp=req.body.descp;
    const content= `The UserName is ${name} of Age ${age}, Contact No: ${phno} residing at ${add} is interested for ${role} Role is good in ${fronttech}, ${backtech} and ${programmingtech} skills. UserDescription: ${descp}`+"\n"+"\n";

    fs.appendFile('output.txt',content,function(err){
        if(err){
            throw err;
        }
        else{
            console.log("Saved!");
        }
    });
    res.status(200).sendFile(__dirname + '/public/index.html');
});
app.get("/help",(req,res)=>{
    res.status(200).sendFile(__dirname + '/public/help.html');
});
//hosting server
app.listen(port,host,()=>{
    console.log(`The website is running on the server https://${host}:${port}`)
})
