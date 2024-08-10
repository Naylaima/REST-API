const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const beritaAcaraRoutes = require('./routes/beritaAcaraRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/users', userRoutes);
app.use('/beritaAcara', beritaAcaraRoutes);

const PORT = process.env.PORT || 3000;
const IP = '10.10.10.80'; // alamat IP laptop 

app.listen(PORT, IP, () => {
    console.log(`Server running on http://${IP}:${PORT}`);
});
