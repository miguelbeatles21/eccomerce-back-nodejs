import express from 'express';
import { getTextApp, getVersionApp } from '../controllers/appController.js';

const router = express.Router();

router.get('/gabsi/text', getTextApp);
router.get('/gabsi/version', getVersionApp);

export default router;  