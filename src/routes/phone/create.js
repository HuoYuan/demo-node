import { Phone } from 'models';

export default (req, res) => {
  const content = req.body;
  const phone = new Phone(content);
  phone.save().then(() => {
    res.json({ msg: '新建成功' });
  });
};
