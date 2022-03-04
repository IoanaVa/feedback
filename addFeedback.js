const connect = require("./db");

const addFeedback = async (req, res) => {
    console.log("adding feedback");

    try {
        const db = await connect();

        const feedbacks = db.collection("feedbacks");

        const { type, isSolved, rating, suggestion } = req.body;

        const newFeedback = {
            type,
            isSolved,
            rating,
            suggestion,
        };

        await feedbacks.insertOne(newFeedback);

        const avgx = await feedbacks.aggregate([
            {
                $match: {
                    type: newFeedback.type
                },
            },
            {
                $group: {
                    _id: "avg",
                    avg: {
                        "$avg": "$rating"
                    }
                }
            }
        ]).toArray();



        const avg = avgx[0].avg.toFixed(2)

        if (avg >= 3) {
            console.log("All good!");
        } else {
            console.log("Average rating is lower than 3. Slack alert!");
        }
    } catch (err) {
        console.log("Error while adding feedback: ", err);
    }

    res.status(201).send({ test: "test" });
};

module.exports = addFeedback;