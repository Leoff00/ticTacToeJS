const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public/'))

app.listen(3333, () => {
    console.log('Listening on PORT: 3333');
})
