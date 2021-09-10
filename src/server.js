const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.route('/article')
.get((req, res) => {
    res.send('Get the article')
})
.post((req, res) => {
    res.send('Post (add) the article')
})
.put((req, res) => {
    res.send('Put (update) the article')
})

app.get('/welcome', (req, res) => {
    res.send('welcom to server')
})

app.use((req, res) => {
    res.status(404).send('ERROR')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})