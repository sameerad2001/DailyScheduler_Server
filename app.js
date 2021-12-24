const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require('cors')

let app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json())

// Middle-wares
app.use(bodyParser.urlencoded({
    extended: true
}));

// Mongoose
mongoose.connect('mongodb://localhost:27017/testDailyScheduleDB', { useNewUrlParser: true });

// Mongoose Models
require("./models/scheduleModel")
require("./models/forgottenScheduleModel")

// API Routes
require("./routes/scheduleRoutes")(app)
require("./routes/forgottenScheduleRoutes")(app)


const port = 5000;
app.listen(port, () => {
    console.log("Server started on port " + port);
})