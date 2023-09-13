const express = require('express');
const path=require('path')
const app = express();
const hbs=require('hbs');

const realpath=path.join(__dirname,'../public')
const templatepath=path.join(__dirname,'../templates/views')
const par=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(par)
app.use(express.static(realpath))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('/*', (req, res) => {

    res.render('Error',{
        message:'OOPS ERROR 404 PAGE'
    })
})

app.listen(process.env.PORT || 3000, () => {

})