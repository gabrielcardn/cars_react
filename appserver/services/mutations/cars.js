import fs from "fs";

const filePath = './services/queries/cars/cars.json'

const findGreaterId = (objects) => {
    if (!objects.length) return -1
    let maxId = objects[0].id;

    for (let i = 1; i < objects.length; i++) {
        if (objects[i].id > maxId) {
            maxId = objects[i].id;
        }
    }

    return maxId;
};


export const carsMutation = async ({ id }, body) => {
    console.log("\n carsMutation");
    let data
    if (fs.existsSync(filePath)) {
        data = fs.readFileSync(filePath,
            { encoding: "utf8", flag: 'r' })
        data = JSON.parse(data)
    }
    else {
        // file doesnt exists, then create file
        data = []
        fs.writeFileSync(filePath, JSON.stringify(data))
    }

    if (id) {
        let foundCarIndex = data.findIndex(car => car.id === parseInt(id))
        if (foundCarIndex > -1) {
            let clone = Object.assign({}, data[foundCarIndex])
            clone.modelo_id = parseInt(body.modelo_id)
            clone.ano = parseInt(body.ano)
            clone.combustivel = body.combustivel
            clone.num_portas = parseInt(body.num_portas)
            clone.cor = body.cor
            clone.nome_modelo = body.nome_modelo
            clone.valor = parseFloat(body.valor)
            clone.brand = parseInt(body.brand)
            console.log(clone)
            data[foundCarIndex] = clone
        }
        fs.writeFileSync(filePath, JSON.stringify(data))
    }

    if (!id) {
        let greaterId = findGreaterId(data);
        let upsertId = 0
        if (greaterId > -1) upsertId = greaterId + 1;
        let upsert = {
            id: upsertId,
            timestamp_cadastro: Date.now(),
            modelo_id: parseInt(body.modelo_id),
            ano: parseInt(body.ano),
            combustivel: body.combustivel,
            num_portas: parseInt(body.num_portas),
            cor: body.cor,
            nome_modelo: body.nome_modelo,
            valor: parseFloat(body.valor),
            brand: parseInt(body.brand),

        }
        data.push(upsert)
        fs.writeFileSync(filePath, JSON.stringify(data))
    }

    return true
}