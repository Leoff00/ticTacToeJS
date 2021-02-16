const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/static/'))

app.listen(3333, () => {
    console.log('Listening on PORT: 3333');
})