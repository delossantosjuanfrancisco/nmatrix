const express = require('express')
const homeController = require('./controllers/homeController')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/api/haladera',homeController.haladera)
app.get('/api/baset',homeController.basetesla)

app.get('/api/vibra',homeController.vibraciones)

let PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.log(`escuchando en puerto ${PORT}`))