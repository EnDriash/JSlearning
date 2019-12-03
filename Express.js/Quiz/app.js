
const express = require('express');
const path = require('path');
const app = express();

const gameRoutes = require('./src/routes/game')

app.listen(5000, () => {
    console.log('Serwer nasłuchuje brawo!')
});
 
app.use(express.static(
    path.join(__dirname+ '/src/public')
));

gameRoutes(app);