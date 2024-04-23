import { carsMutation } from "./cars.js"


export const mutation = async (page, params, body) => {

    let data
    switch (page) {
        case "cars":
            data = await carsMutation(params, body)
    }

    return {
        status: true,
        message: "Success!",
        data: data
    }
}


