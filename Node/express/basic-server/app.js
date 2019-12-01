const express = require('express');
const app = express();

// register some middlewares
// body-parser

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/', function(req,res) {
    res.send('Welcome to my App')
});

app.get('/contact', function(req,res) {
    let name = req.query.name;
    // console.log(query)
    res.send(`Contact Page, ${name}`);
});

app.post('/contact', function(req,res) {

    let bodyData = req.body;
    console.log(bodyData)

    // res.send('Thanks for contacting us')

    res.json(bodyData);

})


app.delete('/remove', function(req,res) {
    res.send('Successfully Deleted')
});


app.put('/update', (req, res) => {
    res.send('Updated')
});


app.patch('/update', (req,res) => {
    res.send('Partial Update')
});


app.get('/:product', function(req,res) {
    res.send(`Product ${req.params.product}`)
})


app.get('/product/:name/:lastname',function(req,res) {

    let name = req.params.name;
    let lstName = req.params.lastname;

    res.send(`Dynamic Route ${name} ${lstName}`)
})




app.listen(3000, () => console.log('Server up and running'))