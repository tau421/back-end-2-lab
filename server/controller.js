const houses = require('./db.json');
let globalId = 4;

const getHouses = (req, res) => {
    res.status(200).send(houses);
}

const deleteHouse = (req, res) => {
    const houses = require('./db.json');
    const { id } = req.params;
    const houseIndex = houses.findIndex((house) => house.id === +id)
    houses.splice(houseIndex, 1)
    res.status(200).send(houses)
}

const createHouse = (req, res) => {
    let { address, price, imageURL } = req.body;
    let newHouse = {
        id: globalId,
        address,
        price,
        imageURL,
    }
    houses.push(newHouse);
    res.status(200).send(houses)
    globalId++
}

const updateHouse = (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    let houseIndex = houses.findIndex((house) => house.id === +id)
    
    if(houses[houseIndex].price <= 10000 && type === 'minus'){
        houses[houseIndex].price = 0;
        res.status(200).send(houses)
    }
    else if (type === 'plus'){
        houses[houseIndex].price += 10000;
        res.status(200).send(houses)
    }
    else if (type === 'minus'){
        houses[houseIndex].price -= 10000;
        res.status(200).send(houses)
    }
    else {res.sendStatus(400)}
}

module.exports = {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse,
};