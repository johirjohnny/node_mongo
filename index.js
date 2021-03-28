const express = require('express');



const app = express();


app.get('/',(req, res) =>{
    res.send("thank you for calling me , I ko ");
})

app.listen(3000, () => console.log('listening to port 3000'));