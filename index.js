import express from 'express'
import supplierRoutes from './routes/supplierRouter.js'
import configurationApp from './routes/configurationApp.js'

//create app

const app = express()

//turn on body in the request
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes
app.use('/', supplierRoutes);
app.use('/', configurationApp);

//Define a port and init app

const port = 8081;

app.listen(port, () => {
    console.log(`The server started in port ${port}`)
})