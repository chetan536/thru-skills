const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

function logger(req,res,next){

    console.log(req.method, req.url);
    // req.name = 'ashu'
    // req.body
    next();

}

app.use(logger);



app.use(function(req,res,next) {
    console.log('Executing second middleware')
    req.myName = 'Learning Express';

    next();
})

function routeMiddleware(req,res,next)  {
    console.log('Route Level middleware');
    next()
}


app.get('/', (req,res) => {

    console.log(`Req OBj ${req.myName}`)

    res.send('Welcome to my app')
});

app.get('/about',routeMiddleware, (req,res) => {
    res.send('About Us')
});


app.get('/content', function(req,res,next) {
    fs.readFile(__dirname+'/packge.json', (err, data) => {
        if(err) {
            next(err)
        }else {
            res.send(data);
        }
    })
})


app.use(function(req,res,next) {
    res.status(404).send('Not Found');
});


app.use(function(err,req,res,next) {
    console.log('Error thrown', err);
    res.status(500).send('Something went wrong')
});


app.listen(3002, () => console.log('App up n running on port 3002'))