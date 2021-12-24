const mongoose = require('mongoose');
const { Schema } = mongoose;

const forgottenScheduleSchema = new Schema({
    title: String,
    obtained: Date,
    scheduleNumber: Number,
    details: String,
    objectives: [{
        objective: String,
        isDone: Boolean
    }]
})

const ForgottenSchedule = mongoose.model("ForgottenSchedule", forgottenScheduleSchema)