var util = require('util');
var genric = 'Hi %s Welcome';
var user_input = process.stdin;
user_input.setEncoding('utf-8');
console.log("please tell me your name")

user_input.on('data', function(data){
    console.log(util.format(genric,data))
})
