const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors")
app.use(express.json());
app.use(cors())

app.get('/api', (req, res) => {
    res.send('Merhaba, Dünya!');
});

app.post('/api/post', (req, res) => {
    const { name, surname } = req.body;
    res.send(`İsim: ${name}, Soyisim: ${surname}`);
});


app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
