const express = require('express');
const app = express();

const navRoutes = require('./routes/navRoutes')

// SETTINGS
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"));

// ROTAS
app.use(navRoutes)

app.listen(3000, () => console.log("Servidor ONLINE..."));
