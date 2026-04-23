const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Welcome to about page!')
})
app.get('/skills', (req, res) => {
  res.send(' Java | Python')
})
app.get('/project', (req, res) => {
  res.send(' complaint management system  |  sunbeam student online portal ')
})
app.get('/contact', (req, res) => {
  res.send(' contact No: XXXXXXXXXXX | Mail: shweta@gmail.com ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

