const mongoose = require('mongoose');

const user = 'potionstory';
const password = 'dpvlthem37'
const uri = `mongodb+srv://${user}:${password}@cluster0.7iykf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology:true,
};

mongoose.Promise = global.Promise;

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(uri, options);
    const connection = mongoose.connection;
    connection.on('error', reject);
    connection.once('open', resolve);
  })
};