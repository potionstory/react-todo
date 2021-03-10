const { Member } = require('../../model');

/* member 모두 찾기 */
exports.find = (req, res) => {
  Member.find({}, { _id: 1, nickname: 1, deposit: 1, depositDate: 1 }).sort( { "depositDate": 1 } ).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* member 한 명 찾기 */
exports.findOne = (req, res) => {
  const _id = req.params.id;

  Member.findOne({ _id }).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* member 추가 */
exports.create = (req, res) => {
  const data = req.body;
  const member = new Member(data);

  Member.findOne( { mobile: data.mobile }, (err, exists) => {
    if (err) throw err;
    if (exists) {
      return res.status(409).json({
        error: "이미 존재하는 전화번호입니다"
      });
    }

    member.save((err, data) => {
      if (err) throw new Error(err);
      res.send(data);
    });
  });
}

/* member 수정 */
exports.update = (req, res) => {
  const data = req.body;
  const _id = req.params.id;

  Member.update({ _id }, data).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* member 삭제 */
exports.remove = (req, res) => {
  const _id = req.params.id;

  Member.remove({ _id }).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}