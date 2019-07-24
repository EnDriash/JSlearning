var os = require('os');

function getSysTime(unit){
    var time = os.uptime();

    switch (unit) {
        case 'min':
            var output = "System running time: " +
                Math.floor(time/60) + 'min. ' + 
                Math.floor(time%60) + 'sec. \n';
            console.log(output);
            break;
        case 'h':
            var output = "System running time: " +
                Math.floor(time/(60*60)) + 'h. ' +
                Math.floor((time%(60*60))/60) + 'min. ' + 
                Math.floor((time%(60*60))%60) + 'sec. \n';
            console.log(output);
            break;
        default:
            console.log(time);
    }
}

exports.print = getSysTime;