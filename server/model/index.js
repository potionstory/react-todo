const mongoose = require('mongoose');
const { Schema } = mongoose;

const MemberSchema = new Schema({
  name: { type: String, require: true },
  nickname: { type: String, require: true },
  mobile: { type: String, require: true },
  deposit: { type: Boolean, default: false },
  depositDate: {type: Date, default: Date.now }
}, { collection: 'member' });

const Member = mongoose.model('Member', MemberSchema);

module.exports = { Member };

