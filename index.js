const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const cheap = require('./data/cheap.json')


app.use(cors());

app.get('/', (req, res) =>{
    res.send('Server running ')
});

app.get('/cheap', (req, res) =>{
    res.send(cheap)
});

app.get('/cheap/:id', (req, res) =>{
    const id = req.params.id;
    const selectedSheap = cheap.find(t => t.id == id);
    res.send(selectedSheap)
    console.log(selectedSheap)
})


app.listen(port, () =>{
    console.log(`cheap server is running on port :${port}`)
})