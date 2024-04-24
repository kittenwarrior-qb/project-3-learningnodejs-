const express = require("express");
const app = express();
const PORT = 8000;

app.get('/getAll', (req,res) => {
    res.send('Get infor');
})

app.post('/create', (req, res) => {
    res.send('Create');
})

app.post('/update', (req, res) => {
    res.send('Update');
})

app.delete('/remove', (req, res) => {
    res.send('Remove');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





