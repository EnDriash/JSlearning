const writer = require("./writer");
const slicer = require("./slicer");
const showList = require("./showList");

function validator(method, content, list) {
    if(typeof method !== "string" && typeof content !== "string" ){
        console.log(`Zły typ danych!`.red)
    } else {
        switch (method){
            case '--list':
                showList(list);
                break;

            case '--add':
                if(content.length < 7){
                    console.log(`Zadanie musi miec przynajmniej 8 znaków`.red)
                }
                if(!isNaN(content)){
                    console.log(`Zadanie musi być wyrażeniem,a nie liczbami!`.red)
                }
                else {
                    if(list.find(task => task.body === content)) {
                        console.log(`Takie zadanie już istnieje!`.red);
                    } else {
                        list.push(
                            {
                                id: `${list.length + 1}`,
                                body: content
                            }
                        );
                        list.map((task, index) => task.id = `${index + 1}`);
                        writer(list);
                    }
                }
                break;

            case '--delete':
                
                if(!isNaN(content)){
                    console.log(`Zaraz nastąpi usunięcie zadania o id: ${content}`);
                    if(list.find(task => task.id === content) === undefined){
                        console.log(`Nie ma takiego zadania o podanym ID!`);
                    } else {
                        console.log(list);
                        slicer(content, list, true);
                    }
                }
                else if(content.length < 7 && isNaN(content)){
                    console.log(`Wpisz przynajmniej 7 znakow`.red)
                } else {
                    if(!list.find(task => task.body === content)) {
                        console.log(`Nie moge usunąć zadania które nie istnieje!`.red);
                    } else {
                        let id = list.findIndex(task => task.body === content ) + 1;
                        console.log(list);
                        slicer(id, list, true);
                    }
                }
                break;

            default:
                console.log(`Nie znam tej metody użyj --list do wyświetlenia zadan lub --add/--delete do dodania/usuniecia zadania`.red)
        } 
    }    
}
module.exports = validator;