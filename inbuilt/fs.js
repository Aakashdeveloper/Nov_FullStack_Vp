var fs = require('fs');
var os = require('os');

fs.writeFile('mytext.txt', 'Hi To FS1',function(err){
    if(err) throw err;
    console.log('Data Created in file')
})

fs.appendFile('mytext.txt', os.platform(),function(err){
    if(err) throw err;
    console.log('Data Created in file')
})

fs.readFile('mytext.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})

fs.rename('mytext.txt','myfile.txt',function(err){
    if(err) throw err;
    console.log('Data Created in file')
})

fs.unlink('myfile.txt',function(err){
    if(err) throw err;
    console.log('file deleted')
})