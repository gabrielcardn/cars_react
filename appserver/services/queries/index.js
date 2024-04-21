import { carsQuery } from "./cars.js"


export const query = async (page, params) => {
    console.log("\nquery")
    console.log("page: ", page)
    console.log("params: ", params)

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


