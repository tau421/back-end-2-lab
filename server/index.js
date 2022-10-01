const express = require('express');
const cors = require('cors');
const { getHouses, deleteHouse, createHouse, updateHouse } = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses);
app.delete('/api/houses/:id', deleteHouse);
app.put('/api/houses/:id', updateHouse);
app.post('/api/houses', createHouse);

app.listen(4004, () => console.log('Server is running on 4004'))