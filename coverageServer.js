import im from 'istanbul-middleware'
const isCoverageEnabled = true

if (isCoverageEnabled) {
    console.log('Hook loader for coverage - ensure this is not production!')
    im.hookLoader('./')
}

import express from 'express'
import cors from 'cors'
let app = express()
app.use(cors())


if (isCoverageEnabled) {
    //enable coverage endpoints under /coverage
    app.use('/coverage', im.createHandler())
}

app.listen(8088)
console.log("server is running: http://localhost:8088/coverage/")