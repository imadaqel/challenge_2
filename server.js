const express = require('express');
var path = require('path');
var bodyparser = require('body-parser')


var app = express();
var PORT = 3000; 
app.use(bodyparser.json());





app.listen(PORT, () => {
    console.log('hhhhhhhh')
  });
app.get('/', (req, res) => { 
   // res.sendfil("POST Request Called") 
    res.sendFile(path.join(__dirname,"/client/index.html"))
   // console.log(req.body.name)  
   res.render('index')
    
  }) 


  app.post('/', (req, res) => { 
      console.log(req.body)
    var data=JSON.parse(req.body)
    
    
  }) 