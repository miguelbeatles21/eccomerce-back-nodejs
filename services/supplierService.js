import { readFileJson, writeJsonFile } from '../utils/file-json.js'

const listSuppliers = () => {
    const jsonSuppliers = readFileJson();
    return jsonSuppliers['suppliers']
}

const deleteSupplier = (nickname) => {
    const jsonSuppliers = readFileJson();
    const suppliers = jsonSuppliers['suppliers']
    const finalSuppliers = suppliers.filter(supplier => supplier.nickname != nickname)
    delete jsonSuppliers.suppliers
    jsonSuppliers['suppliers'] = finalSuppliers;
    writeJsonFile(jsonSuppliers)


}

const addSupplier = (payload) => {
    const nickname = payload['nickname']
    const jsonSuppliers = readFileJson();
    const suppliers = jsonSuppliers['suppliers'];
    const existElement = suppliers.find((element) => element.nickname == nickname);
    if(!existElement){
        suppliers.push(payload)
    }
    delete jsonSuppliers.suppliers
    jsonSuppliers['suppliers'] = suppliers;
    writeJsonFile(jsonSuppliers)
    return jsonSuppliers


}
export {
    listSuppliers,
    deleteSupplier,
    addSupplier,
}