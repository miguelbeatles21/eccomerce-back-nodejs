import express from 'express';
import { getSuppliers, deleteSuppliers, addSuppliers } from '../controllers/supplierController.js';

const router = express.Router();

router.get('/suppliers', getSuppliers);
router.delete('/suppliers/:nickname', deleteSuppliers);
router.post('/suppliers', addSuppliers);

export default router;  