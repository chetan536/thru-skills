const epresss = require('express');

const app = express();

app.get("/", function(req,res){
    res.send('welcome to my App')
});

app.get('/contact',function(req,res){
    let name = req.query.name;
    // consu\ole.log(query)
    res.send(`contact page, ${nmae}`);
});


app.post('/contact',function(req,res){
    res.send('thanks for contacting us')
})

app.delete('/remove', function(req,res){
    res.send('succesfully delete')
})

app.post('/update', (req,res) => {
    res.send('update')
})


app.patch('/update', (req,res) => {
    res.send('partial update')
})

app.get('/product/:name/:lastname', function(req,res){
    
    let name = req.params.name;
    let lstName = req.params.name;

    res.send(`dynamic route ${name} ${lstName}`);
})


app.listen(3000,() => console.log('sserver up and running'))