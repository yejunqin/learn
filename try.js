/**
 * Created by Administrator on 2016/2/18.
 */
var fs = require('fs');
var http = require('http');
var fileTest = function(){
    var stream = fs.createReadStream('./test.json');
    stream.on('data', function(chunk){
        console.log(chunk);
    });
    stream.on('end', function(){
        console.log('finished');
    })
};
var createServer = function(){
    var server = http.createServer();
    server.on('request', function(req,res){
        res.writeHead(200, {'Content-Type':'image/png'});
        fs.createReadStream('./check.png').pipe(res);
    });
    server.listen(3000);
    console.log('server running at port 3000');
};
createServer();