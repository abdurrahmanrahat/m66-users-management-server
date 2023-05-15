const express = require('express');
const cors = require('cors');
const app = express();
// Port টা এই ভাবে declare করলে deployment এ আর প্রবলেম হয় না।
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

const users = [
    { id: 01, name: 'Rahat', email: 'rahat@gmail.com' },
    { id: 02, name: 'Yasin', email: 'yasin@gmail.com' },
    { id: 03, name: 'mahtab', email: 'mahtab@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('Users Management Server is running!!');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('Post api hitting!!');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})