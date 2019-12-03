const mongo = require('mongodb');
const client = new mongo.MongoClient('mongodb://127.0.0.1:27017', { 
    useUnifiedTopology: true });

function addNewToDo(todosCollection, title) {
    todosCollection.insertOne({
        title,
        done: false,
    }, err => {
        if (err) {
            console.log(`Błąd podczas dodawania! ${err}`);
        } else {
            console.log(`Dodawanie przebiegło pomyslnie!`);
        }
        client.close();
    })
}
function showAllToDos(todosCollection) {
    todosCollection.find().toArray((err, data) => {
        if (err) {
            console.log(`Błąd podczas wyświetlania! ${err}`);
        } else {
            const toDosDone = data.filter(elem => elem.done);
            const toDosToDo = data.filter(elem => !elem.done)

            console.log(`Lista zadań ToDo (niezrobione):`)

            for(todo of toDosToDo) {
                    console.log(`_id: (${todo._id}), title: ${todo.title} , done: ${todo.done};`);
            }

            console.log(`Lista zadań ToDo (zrobione):`)

            for(todo of toDosDone) {
                    console.log(`_id: ${todo.id}, title: ${todo.title} , done: ${todo.done};`);
            }
            
        }
        client.close();
    })
}

function updateToDoJob(todosCollection, id) {
    todosCollection.updateOne({_id: mongo.ObjectID(id)}, {$set: {done: true}}, err => {
        if (err) {
            console.log(`Błąd podczas zmiany stanu zadania! ${err}`);
        } else {
            console.log(`Zmiana stanu przebiegła pomyslnie! Task jest skończony`);
        }
    })
    client.close();
}

function deleteToDoJob(todosCollection, id) {
    todosCollection.deleteOne({_id: mongo.ObjectID(id)}, err => {
        if (err) {
            console.log(`Błąd podczas usuwania zadania! ${err}`);
        } else {
            console.log(`Zadanie zostało usuniete!`);
        }
    })
    client.close();
}
function deleteAllToDos(todosCollection) {
    todosCollection.deleteMany({done: true}, err => {
        if (err) {
            console.log(`Błąd podczas usuwania! ${err}`);
        } else {
            console.log(`Wszystko zostało usuniete!`);
        }
    })
    client.close();
}

function doToDo(todosCollection) {
    const [command, ...args] = process.argv.splice(2);

    switch(command) {
        case 'add':
            addNewToDo(todosCollection, args[0]);
            break;
        case 'list':
            showAllToDos(todosCollection);
            break;
        case 'done':
            updateToDoJob(todosCollection, args[0]);
            break;
        case 'delete':
            deleteToDoJob(todosCollection, args[0]);
            break;
        case 'clearall':
            deleteAllToDos(todosCollection);
            break;
        default:
            console.log(`
            Welcome in CRUD app:

            Avilable Commends:
            add <title> -added next task
            done <id> - updating task to done tasks
            delete <id> - delete choosen task
            clearall - delete all tasks
            `);
            client.close();
        
    }
}

client.connect((err) => {
    if(err) {
        console.log('Nie udało się połączyć z bazą danych');
    } else {
        const db = client.db('test')
        const todos = db.collection('todos')
        
        doToDo(todos);
    }
});