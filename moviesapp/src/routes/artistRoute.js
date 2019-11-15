var express = require('express');
var artistRouter = express.Router();

function router(menu){

    artistRouter.route('/')
        .get(function(req,res){
            // res.send('My artist main page')
            res.render('artist',{title:'Artist Page',menu:menu})
    })

    artistRouter.route('/details')
        .get(function(req,res){
            res.send('My artist details page')
    })

    return artistRouter
}



module.exports=  router;