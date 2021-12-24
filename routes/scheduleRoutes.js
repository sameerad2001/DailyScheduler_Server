const mongoose = require("mongoose")
const Schedule = mongoose.model("Schedule")

module.exports = (app) => {
    // Global routes
    app.route("/schedules")
        .get((req, res) => {

            Schedule.find((err, oldSchedules) => {
                if (err)
                    res.send(err);
                else
                    res.send(oldSchedules);
            })

        })
        .post((req, res) => {

            const newSchedule = new Schedule({
                title: req.body.title,
                obtained: req.body.obtained,
                scheduleNumber: req.body.scheduleNumber,
                details: req.body.details,
                objectives: req.body.objectives
            });

            newSchedule.save((err) => {
                if (err)
                    res.send(err)
                else
                    res.send("Added a new schedule! \"El Psy Kongroo\"")
            })
        })
        .delete((req, res) => {
            res.send("NOPE YOU CAN'T DELETE ALL THE DATA! FUCK OFF")
        });


    // Parameterized routes _______________________________________________________________________________________ 
    app.route("/schedules/title/:title")
        .get((req, res) => {
            Schedule.find({ title: req.params.title }, (err, schedulesYouSeek) => {
                if (err)
                    res.send(err)
                else
                    res.send(schedulesYouSeek);
            }
            )
        });

    app.route("/schedules/obtained/:obtained")
        .get((req, res) => {
            Schedule.find({ questObtained: Date.parse(req.params.obtained) }, (err, schedulesYouSeek) => {
                if (err)
                    res.send(err)
                else
                    res.send(schedulesYouSeek);
            }
            )
        });

    // Modifications can only be done based on the quest scheduleNumber
    app.route("/schedules/scheduleNumber/:scheduleNumber")
        .get((req, res) => {
            Schedule.findOne({ scheduleNumber: req.params.scheduleNumber }, (err, questYouSeek) => {
                if (err)
                    res.send(err)
                else
                    res.send(questYouSeek);
            })
        }).patch((req, res) => {
            Schedule.updateOne({ scheduleNumber: req.params.scheduleNumber },
                {
                    $set: req.body
                },
                (err) => {
                    if (err)
                        res.send(err);
                    else
                        res.send("Mutated one schedule")
                })
        })
        .delete((req, res) => {
            Schedule.deleteOne({ scheduleNumber: req.params.scheduleNumber }, (err) => {
                if (err)
                    res.send(err)
                else
                    res.send("Deleted one schedule successfully!")
            })
        });
}