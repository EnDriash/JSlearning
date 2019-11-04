const fs = require('fs');
const colors = require('colors');

const arg = process.argv[2];
const content = findContent();
const method = findMethod();

let list = JSON.parse(fs.readFileSync('./data.json')); 

function findMethod() {
    if(arg.search('=') !== -1){
        return arg.slice(0,arg.search('='));
    } else {
        return arg;
    }
}

function findContent() {
    if(arg.search('=')){
        return arg.slice(arg.search('=') + 1)
    } else{
        return null;
    }
}

function showList (list) {
    list.forEach( elem => {
        if(elem.id%2 === 0){
            console.log(colors.green(elem.body))
        } else {
            console.log(colors.yellow(elem.body))
        }
    });
}

if(arg === '--list'){
    showList(list);
}

if(method === '--add'){
    
}
if(method === '--delete'){
    
}
console.log(arg, method, content, arg.search('='));