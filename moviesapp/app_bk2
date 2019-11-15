var express = require('express');
var app = express();
var port =  7800 || env.process.PORT;
var moviesRouter = express.Router();
var artistRouter = express.Router();

app.get('/', function(req,res){
    res.send('My API Code')
});

moviesRouter.route('/')
    .get(function(req,res){
        res.send('My movies main page')
    })

moviesRouter.route('/details')
    .get(function(req,res){
        res.send('My movies details page')
    })

artistRouter.route('/')
    .get(function(req,res){
        res.send('My artist main page')
    })

artistRouter.route('/details')
    .get(function(req,res){
        res.send('My artist details page')
    })

app.use('/movies', moviesRouter);
app.use('/artist', artistRouter);

app.listen(port,function(err){
    if(err) throw err
    console.log('Server running on port '+port)
})


