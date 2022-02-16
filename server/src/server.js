const express = require("express");
const dotenv = require("dotenv");
const namesRoutes = require("./routers/names-routes");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 1000;

/*app.get('/healthCheck', (req, res) => {
    res.json({
        message: "Hello"
    })
})*/
app.use(cors('*'))


app.use("/api/names", namesRoutes);

app.listen(port, () => console.log(`Server listen on ${port}`))
