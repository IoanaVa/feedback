const { MongoClient } = require('mongodb');

const connect = async () => {
    const uri = 'mongodb+srv://DO_NOT_MODIFY:DO_NOT_MODIFY@demo.owfy7.mongodb.net/feedbacks?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await client.connect();

    // const dbs = await listDatabases(client);

    // console.log("dbs", dbs)
}

module.exports = connect;