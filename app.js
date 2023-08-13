const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const expresslayout = require('express-ejs-layouts')
const { contact, cekip } = require('./utils/contact')
const app = express()
const port = 3000;

app.set('view engine', 'ejs');
app.use(expresslayout);
app.use(express.static('public'))


app.get('/', async (req, res) => {
    const myinpoif = await cekip();
    res.render('index', {
        layout: 'layouts/main-layout',
        title: 'Halaman Index',
        myinpoif: myinpoif,
    });

})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About'
    });

})

app.get('/contact', (req, res) => {
    const contacts = contact();
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts,
    })


})


app.use('/', (req, res) => {
    res.status('404');
    res.send('<h1>404</h1>');
})


app.listen(port, () => {
    console.log(` ${port}`)

})

