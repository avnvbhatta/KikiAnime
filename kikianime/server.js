const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser')
var Vibrant = require('node-vibrant')

var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/', (req, res) => {
  Vibrant.from(req.body.imgURL).getPalette()
  .then((palette) => res.send(palette))
  .catch(err =>{
    res.send(err)
  })

}  ); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




