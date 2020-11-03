const express = require('express');
var path = require('path');

var app = express();
var PORT = 3000; 






app.listen(PORT, () => {
    console.log('hhhhhhhh')
  });
app.get('/', (req, res) => { 
   // res.sendfil("POST Request Called") 
    res.sendFile(path.join(__dirname,"/client/index.html"))
    
  }) 


  app.post('/', (req, res) => { 
   console.log('hiiiii')
  }) 