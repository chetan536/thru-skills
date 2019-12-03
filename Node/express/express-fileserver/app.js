const express = require('express');
const fs = require('fs');
const middleware = require('./middleware/appmiddleware')
const app = express();


// body data middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(function(req,res,next){
    console.log(req.method , req.url);
    next();
})


// routes
app.get('/',(req,res,next) => {
  fs.readFile(__dirname+'/views/index.html',(err,data)=>{
      if(err){
          next(err)
      }else{
          res.write(data);
          res.end()
      }
  })
})


app.get('/contact',(req,res,next)=>{
    fs.readFile(__dirname+'/views/contact.html',(err,data)=>{
        if(err){
            next(err)
        }else{
            res.write(data);
            res.end()
        }
    })

})

app.post('/contact',(req,res)=>{
    
    let body = req.body;
    console.log('succesfully submitedd',body);
    next();

    res.send('sucessfully submitted')
})

app.use(function(req,res,next){
    res.status(404).send('not found')
})

app.use(function(err, req,res,next){
    console.log(err);
    res.send(500).send('something went wrong')
})


// error midleware
app.use(middleware.notFound)
app.use(middleware.errorHandler)

app.listen(3000, () => console.log('server running on port 3000'))