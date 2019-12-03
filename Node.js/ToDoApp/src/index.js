const fs = require('fs');
const validator = require("./validator");
const colors = require('colors');


let list = JSON.parse(fs.readFileSync('../data.json')); 
const arg = process.argv[2];
const content = findContent();
const method = findMethod();

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

validator(method, content, list);

