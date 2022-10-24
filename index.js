const express = require('express');
const app = express();
const phones = require('./phones.json');
const port = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send("I'm new content here.")
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(ph => ph.id === id) || 'Not Found';
    res.send(phone);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
