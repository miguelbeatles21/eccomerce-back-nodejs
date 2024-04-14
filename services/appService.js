import { readFileJson } from '../utils/file-json.js'

const file = readFileJson();

const textToShow = () => {
    return file['welcomeText']
}

const versionToShow = () => {

    return file['version']

}

export {
    textToShow,
    versionToShow,
}