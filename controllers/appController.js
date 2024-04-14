import { textToShow, versionToShow } from '../services/appService.js'

const getTextApp = (req, res) => {
    res.json(textToShow());
}

const getVersionApp = (req, res) => {

    res.json(versionToShow())


}


export {
    getTextApp,
    getVersionApp,
}