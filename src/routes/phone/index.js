import express from 'express';
import create from './create';
import getAll from './getAll';

const router = new express.Router();
router.post('/', create);
router.get('/', getAll);

export default router;
