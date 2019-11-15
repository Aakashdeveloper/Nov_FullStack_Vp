var express = require('express');
var moviesRouter = express.Router();


function router(menu){
    moviesRouter.route('/')
        .get(function(req,res){
            // res.send('My movies main page')
            res.render('movies',{title:'Movies Page',menu:menu})
    })

    moviesRouter.route('/details')
        .get(function(req,res){
            res.send('My movies details page')
    })

    return moviesRouter
}



module.exports =  router;