const express = require("express");
const path = require('path');
const cors = require("cors");
const env = require("dotenv").config()
const PORT = process.env.port || 8000;
const multer = require('multer');
const upload = multer();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/public', express.static(path.join(__dirname, 'public')));


app.use('/api', require("./api/allRoutes/allRoutes"))

app.listen(PORT, (err) => {
  console.log(`server is listening on http://localhost:${PORT}`)
})
