const mongoose = require("mongoose")
const ForgottenSchedule = mongoose.model("ForgottenSchedule")

module.exports = (app) => {

    // Post the details of the schedule to forget 
    app.route("/forgetSchedule")
        .post((req, res) => {
            const scheduleToForget = new ForgottenSchedule({
                title: req.body.questTitle,
                obtained: req.body.questObtained,
                scheduleNumber: req.body.scheduleNumber,
                details: req.body.details,
                objectives: req.body.objectives
            });

            scheduleToForget.save((err) => {
                if (err)
                    res.send(err)
                else
                    res.send("This schedule has been forgotten (i.e put in the trash bin)")
            })
        })

}