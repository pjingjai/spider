const express = require('express')
const app = express()
const port = 3000

const {murmansk, murmanskCustom} = require('./spiders/wikivoyage')

app.get('/', murmansk)
app.get('/custom', murmanskCustom)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
