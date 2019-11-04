const fs = require('fs');

function writer(list) {
    fs.writeFile("../data.json", JSON.stringify(list, null, 3), (err) => {
        if(err) {
            console.log(`Nie udalo sie zapisać pliku! ERROR: ${err}`)
        } else {
            console.log(`Plik zapisany`)
        }})
}
module.exports = writer;