import { Phone } from 'models';

export default (req, res) => {
  Phone.find().then(phones => {
    res.json({ phones });
  });
};
