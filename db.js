const { MongoClient } = require('mongodb');

const connect = async () => {
    const uri = 'mongodb+srv://ADMIN:admin@demo.owfy7.mongodb.net/feedbacks?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await client.connect();

    return client.db();
}

module.exports = connect;