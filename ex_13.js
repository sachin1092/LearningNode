var http = require('http')
var url = require('url')
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var parsed_url = url.parse(req.url, true)
    var result = {}
    var date = new Date(parsed_url['query']['iso'])
    if(parsed_url['pathname'] == '/api/parsetime') {
        result = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }
    } else if (parsed_url['pathname'] == '/api/unixtime') {
        result = {
            'unixtime': date.getTime()
        }
    }
    res.write(JSON.stringify(result))
    res.end()
})

server.listen(Number(process.argv[2]))