import axios from "axios"

const url = "https://wswork.com.br/cars_by_brand.json"

export const carsQuery = async ({ id, brand }) => {
    const getCarsJson = async () => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error getting JSON from cars:', error);
            throw error;
        }
    }
    console.log(params)
    const carsData = await getCarsJson();

    if (id) return carsData.find(car => car.id === id)

    if (brand)

        return carsData
}