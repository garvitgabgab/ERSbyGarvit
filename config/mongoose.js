const mongoose = require('mongoose');

const mongo_url = 'mongodb+srv://garvitgaur902:12345@cluster0.vx9ef5p.mongodb.net/ERSapp?retryWrites=true&w=majority';



mongoose.connect(mongo_url);
const db = mongoose.connection;
db.once('error', (error) => {
  console.log('error in connectiong to db');
});


db.once('open', () => {
  console.log('connected to db');
});

module.exports = db;
