var express = require('express');
var moviesRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017"


function router(menu){
    moviesRouter.route('/')
        .get(function(req,res){
            mongodb.connect(url,function(err,db){
                if(err){
                    res.status(401).send('error while connecting')
                }else{
                    const dbo = db.db('classdatabase');
                    dbo.collection('movies').find({}).toArray(
                        function(err,data){
                            if(err){
                                res.status(401).send('No Data')
                            }else{
                                res.render('movies',
                                {title:'Movies Page',
                                menu,
                                moviesdata:data})
                            }

                        }
                    )
                }
            })
    })

    moviesRouter.route('/details/:id')
        .get(function(req,res){
            // var id = req.params.id
            var {id} = req.params
            mongodb.connect(url,function(err,db){
                if(err){
                    res.status(401).send('error while connecting')
                }else{
                    const dbo = db.db('classdatabase');
                    dbo.collection('movies').findOne({_id:id},function(err,data){
                        if(err){
                            res.status(401).send('Error in feetching')
                        }else{
                            res.render('details',{
                                title:'Movies details',
                                movies:data,
                                menu:menu
                            })
                        }
                    })
                }
            })
    })

    return moviesRouter
}



module.exports =  router;