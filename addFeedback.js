const connect = require('./db')
const addFeedback = async (req, res) => {
    console.log('adding feedback')

    // connect to db
    // await connect()

    // create feedback to add

    // get all feedbacks in the same category

    // get the average score for x category

    // check if average scoare <= 3
        // if score <=3 post to slack


    res
        .status(201)
        .send({ test: 'test' })
}

module.exports = addFeedback