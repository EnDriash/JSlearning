function showList(list) {
    list.forEach( elem => {
        if(elem.id%2 === 0){
            console.log(elem.body.green)
        } else {
            console.log(elem.body.yellow)
        }
    });
}
module.exports =  showList;