import * as fs from "fs";

const readFileJson = () => {
    try {
        // reading a JSON file synchronously
        const data = fs.readFileSync("bd.json");
        const suppliersJson = JSON.parse(data);
        return suppliersJson;
    } catch (error) {
        // logging the error
        console.error(error);

        throw error;
    }

    // parsing the JSON content

}

const writeJsonFile = (data) => {
    try {

        fs.writeFileSync("bd.json", JSON.stringify(data));
    } catch (error) {
        // logging the error
        console.error(error);

        throw error;
    }
}


export {
    readFileJson,
    writeJsonFile,
}