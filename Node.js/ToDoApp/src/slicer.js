function slicer(id, list, write){
    if(!isNaN(id) && write === true){
        list = [...list.splice(0,id-1), ...list.splice(id -1)];
        list.map((task, index) => task.id = `${index + 1}`);
        writer(list);
    } else if((isNaN(id) || null)&& write === true) {
        writer(list);
    } else {
        return list;
    }
}
module.exports =  slicer;