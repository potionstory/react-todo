const mongoose = require('mongoose');

const user = 'potionstory';
const password = 'dpvlthem37'

mongoose.Promise = global.Promise;

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${user}:${password}@ds351827.mlab.com:51827/fe-star`);
    const connection = mongoose.connection;
    connection.on('error', reject);
    connection.once('open', resolve);
  })
};