const express = require('express')

const app = express();

app.use(express.static('lecture3'))

app.listen(3000);