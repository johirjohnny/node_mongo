const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ["asad", 'galib', 'johnny', 'rony', 'suhana'];
app.get('/', (req, res) => {
    res.send("thank you for calling me , hise thamen ");
})


app.get('/fruits/banana', (req, res) => {
    res.send({
        fruits: 'banana', quantity: 1000, price: 1000
    });

})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });
})

//post
app.post('/addUser', (req, res) => {
    res.send(req.body);
})
app.listen(4000, () => console.log('listening to port 4000'));