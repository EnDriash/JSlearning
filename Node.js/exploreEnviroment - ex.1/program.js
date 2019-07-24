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
            default:
                process.stderr.write('Instruction dosent egzist\n');
        }
    }
});