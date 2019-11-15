var express = require('express');
var app = express();
var port =  7800 || env.process.PORT;

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

var menu = [
    {name:'Home', link:'/'},
    {name:'Movies', link:'/movies'},
    {name:'Artist', link:'/artist'}
]
var moviesRouter = require('./src/routes/moviesRoute')(menu);
var artistRouter = require('./src/routes/artistRoute')(menu);

app.get('/', function(req,res){
    // res.send('My API Code')
    res.render('index',{title:'Home Page',menu:menu})
});

app.use('/movies', moviesRouter);
app.use('/artist', artistRouter);

app.listen(port,function(err){
    if(err) throw err
    console.log('Server running on port '+port)
})


