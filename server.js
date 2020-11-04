
//app.use(bodyparser.json());
// app.get('/', (req, res) => { 
//    // res.sendfil("POST Request Called") 
//     res.sendFile(__dirname + "/"+"/client/index.html")
//    // console.log(req.body.name)  
//    //res.render('index')

//   }) 
var express=require('express');
var app=express();
// middleware method 
app.use(express.json());
app.use(express.urlencoded());
app.post('/',function(req,res){
   // make JSON strengify fr Objec
   response = {  
    data:req.body
};  
console.log(response,req.body);  

res.send(JSON.stringify(response));  
});
app.listen(3000,function(){
    console.log("server at localhost:3000");
})
