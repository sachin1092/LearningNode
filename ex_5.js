path = require('path')
fs = require('fs')
fs.readdir(process.argv[2], function (err, contents) {
    for(var i = 0; i < contents.length ; i++){
        if(path.extname(contents[i]).slice(1) == process.argv[3])
            console.log(contents[i])
    }
})