require('dotenv/config')

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000

const app = express()


app.get('/', (req, res) => {
  res.send('HE');
})

app.listen(PORT, (error) => {
	console.log(`Server been started: http://localhost:${PORT}`)
})