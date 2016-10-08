import express from 'express';
import phone from './phone';

const router = new express.Router();
router.use('/phone', phone);
router.use('/test', (req, res) => {
  res.send('test success');
});

export default router;
