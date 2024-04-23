import { carsRemove } from "./cars.js"


export const remove = async (page, params) => {

    let data
    switch (page) {
        case "cars":
            data = await carsRemove(params)
    }

    return {
        status: true,
        message: "Success!",
        data: data
    }
}


