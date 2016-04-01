fs = require('fs')
path = require('path')
module.exports = function (name, ext, callback) {
    fs.readdir(name, function (err, contents){
        if(err)
            return callback(err)
        contents = contents.filter(function (file) {
            return path.extname(file).slice(1) == ext
        })
        callback(null, contents);
    })
}