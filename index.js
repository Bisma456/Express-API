const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./users') 
const app = express();

const PORT = 4000
app.use(bodyParser.urlencoded({ extended: true}));
app.listen(PORT, (req,res)=>{
    console.log('server is running at port:', PORT)
})
console.log(users)
app.get('/api/users', (req,res)=>{
    res.json(users)
})
app.get('/api/users/:id' , (req,res)=>{
   let id = req.params.id
   console.log(id)
   let result = users.filter((item)=>item.id == id)
    res.json(result[0])
})



//   app.get("/aboutus", (req,res)=>{
//     // res.send('<h2>AboutUs<h2>')
//       res.sendFile(path.join(__dirname, 'public','aboutus.html'))
//   })