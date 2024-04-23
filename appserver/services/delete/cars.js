import fs from "fs";

const filePath = './services/queries/cars/cars.json'

export const carsRemove = async ({ id }) => {
    console.log("\n carsRemove");
    let data
    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath,
            { encoding: "utf8", flag: 'r' })
        data = JSON.parse(data)
    }
    else {
        return false
    }

    let foundCarIndex = data.findIndex(car => car.id === parseInt(id))
    if (foundCarIndex > -1) {
        data.splice(foundCarIndex, 1)
        fs.writeFileSync(filePath, JSON.stringify(data))
    }




    return true
}