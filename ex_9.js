var http = require('http')
var bl = require('bl')
function callUrl(urls) {
    http.get(urls[0], function (response) {
        response.pipe(bl(function (err, data) {
            console.log(data.toString())
            urls = urls.slice(1)
            if(urls.length){
                callUrl(urls)
            }
        }))
    })
}
callUrl(process.argv.slice(2))