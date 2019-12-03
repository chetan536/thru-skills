const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')



app.get('/', (req,res) => {

    let age = 20;

    res.render('index', {
        layout: 'layout',
        title:'Home',
        name: 'Ashutosh Mishra',
        htmlData: '<p>This is html content</p>',
        hobbies: ['Football', 'Reading','Coding'],
        eligibility: age > 18 ? true : false,

        education : {
            degree: 'Bachelors',
            grade: 'A',
            YOP: 2020
        },

        products: [
            {
                name:'Samsung',
                price:2000
            },
            {
                name:'Iphone',
                price:1000
            },
            {
                name:'Lenovo',
                price:3000
            } 
        ]
    })
})


app.get('/contact', (req,res) => {
    res.render('contact', {
        title:'Contact Us'
    });
})



app.listen(3002, () => console.log('Server running on port 3002'))