var fs = require('fs');

fs.readdir('./exampledir', 'utf-8',function(err,files){
    if (err) throw err;
    console.log(files);
    var content = '';
    for (var i=0; i < files.length; i++){
        content += files[i] + ' ,';
    }
    fs.writeFile('./direxamplecontent.txt', content,'utf-8', function(err){
        if (err) throw err;
        console.log('Zapisano!');
    });
});