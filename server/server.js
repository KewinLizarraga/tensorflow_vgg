let express = require('express')
let app = express()

const PORT = 8080

app.use(function (req, res, next) {
    console.log('Server Running...')
    next()
})

app.use(express.static("../client"))

app.listen(PORT, function () {
    console.log(`Serving at: ${PORT}`)
})