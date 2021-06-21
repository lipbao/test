const express = require('express')

const app = express()

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.engine('.html',require('express-art-template'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.listen(3000,()=>{
    console.log('app is running ...')
})