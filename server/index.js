const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())
app.post('/', (req, res) => {
    const data = req.body;
    console.log(`Recibido ${data}`)
    res.json({success: true, message: data });
})

app.listen( 5000, () => {
    console.log(`App is running`)
})