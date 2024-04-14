import { listSuppliers, deleteSupplier, addSupplier } from '../services/supplierService.js'

const getSuppliers = (req, res) => {
    res.json(listSuppliers());
}

const deleteSuppliers = (req, res) => {

    deleteSupplier(req.params.nickname);
    res.send('Se elimino correctamente el proveedor')


}

const addSuppliers = (req, res) => {
    res.json(addSupplier(req.body))

}


export {
    getSuppliers,
    deleteSuppliers,
    addSuppliers,
}