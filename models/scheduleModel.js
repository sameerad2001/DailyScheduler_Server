const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
    title: String,
    obtained: Date,
    scheduleNumber: Number,
    details: String,
    objectives: [{
        objective: String,
        isDone: Boolean
    }]
})

const Schedule = mongoose.model("Schedule", scheduleSchema)