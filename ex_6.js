var mymodule = require('./my_module1.js')
mymodule(process.argv[2], process.argv[3], function (err, contents){
    contents.forEach(function (file){
        console.log(file)
    })
})