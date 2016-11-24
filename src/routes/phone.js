import express from 'express';
import { Phone } from 'models';

const router = new express.Router();

router.post('/', (req, res) => {
  const content = req.body;
  const phone = new Phone(content);
  phone.save().then(() => {
    res.json({ msg: '新建成功' });
  });
});

router.get('/', (req, res) => {
  Phone.find().then(phones => {
    res.json({ phones });
  });
});

export default router;
