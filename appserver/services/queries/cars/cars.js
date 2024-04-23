import fs from "fs";

const filePath = './services/queries/cars/cars.json'

export const carsQuery = async ({ id }) => {
    let data
    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath,
            { encoding: "utf8", flag: 'r' })
        data = JSON.parse(data)
    }
    else {
        // file doesnt exists, then create file
        data = []
        fs.writeFileSync(filePath, JSON.stringify([]))
    }
    if (id) {
        let foundCar = data.find(car => car.id === parseInt(id))
        return foundCar
    }


    return data
}