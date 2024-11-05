const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

let item = [
    {
        id : 1,
        name : 'Book 1',
        description : 'Book 1 description'
    },

    {
        id : 2,
        name : 'Book 2',
        description : 'Book 2 description'
    },

    {
        id : 3,
        name : 'Book 3',
        description : 'Book 3 description'
    },

    {
        id : 4,
        name : 'Book 4',
        description : 'Book 4 description'
    }
]

//This is post request for adding items to the array
app.post('/items', (req, res) => {
    
    const newItem = req.body;

    item.push(newItem);
    res.send(item);
});

//This is get request for getting all items
app.get('/items', (req, res) => {
    res.send(item);
});

//This is get request for getting a single item by id
app.get('/items/:id',(req, res) => {
    const itemId = parseInt(req.params.id);
    const foundItem = item.find(item => item.id === itemId);
    if(foundItem) {
        res.send(foundItem);
    } else {
        res.status(404).send('Item not found');
    }
})

//This is get request for getting items by searching through names
app.get('/items/search', (req, res)=>{
    const searchTerm = req.query.name;
    const foundItems = item.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foundItems);
});

//THis is put request for updating items
app.put('/items/:id', (req, res)=>{
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
    let v = itemId-1;
    
    
    
    item.splice(v, 1, updatedItem);
    res.send(item);
})

//This is delete request for deleting items
app.delete('/items/:id', ( req,res)=>{
    const itemId = parseInt(req.params.id);
    let v = itemId-1;
    item.splice(v, 1);
    res.send(item);
})

app.listen(port, (req, res) => {
    console. log("This is server listening on port")
})
