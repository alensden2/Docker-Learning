const express = require("express");
const middleWare = require("./middleware.js")

const app = express()
app.use(express.json());

app.post("/calculate", middleWare.checkIfFileExists)

app.listen(6000, () => {
    console.log("container_P1 running @ 6000")
})
