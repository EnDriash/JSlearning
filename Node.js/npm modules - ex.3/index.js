var OSinfo = require('./modules/OSinfo');
var readline = require('readline');
var systemTime = require('./modules/systemTime');
process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quiting app!\n');
                process.exit();
                break;
            case 'version':
                var version = process.versions.node;
                process.stdout.write('Node version is: ' + version + '\n');
                break;
            case 'lang':
                var lang = process.env.LANG;
                process.stdout.write('Language of aplication is: ' + lang + '\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '/systemTime':
                    var rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                      });
                      rl.question('Put h for hour or min for minutes! \n', (answer) => {
                        switch(answer) {
                            case 'h':
                                systemTime.print('h'); 
                                break;
                            case 'min':
                                systemTime.print('min'); 
                                break;
                            default :
                                systemTime.print(); 
                                break;
                        }
                        rl.close();
                      });
                break;
            default:
                process.stderr.write('Instruction dosent egzist\n');
        }
    }
});