import { carsQuery } from "./cars/cars.js"


export const query = async (page, params) => {
    let data
    switch (page) {
        case "cars":
            data = await carsQuery(params)
    }

    return {
        status: true,
        message: "Success!",
        data: data
    }
}


