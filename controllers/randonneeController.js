const randonneeModel = require('../models/randonneeModel');


// add randonnee
exports.add_randonnee=(req,res,next)=>{
    console.log(req.body);
    const randonnee = new randonneeModel({
        name : req.body.name,
        description : req.body.description,
        datesortie : req.body.datesortie,
        datefin : req.body.datefin,
        destiniation : req.body.destiniation,
        prix : req.body.prix,
        nombre_places : req.body.nombre_places,
        id_organisateur : req.body.id_organisateur,
    });
    randonnee
        .save()
        .then(result =>{
            console.log('created randonnee');
            res.send('created randonnee');
        })
        .catch(err =>{
            console.log(err);
        });



        
};

// fetch all randonnees
exports.get_randonnee=(req,res,next)=>{
     
    randonneeModel
        .find()
        .then(result =>{
            console.log("tous les randonnées :");
            res.send(result);
        })
        .catch(err =>{
            console.log(err);
        });
    }
    // fetch-by-ID randonnees
exports.getbyId_randonnee=(req,res,next)=>{
     
    randonneeModel
        .findById(req.params.randonneeId)
        .then(result =>{
            console.log(result);
            res.send(result);
        })
        .catch(err =>{
            console.log(err);
        });
}

//Update randonnee
exports.update_randonnee=(req,res,next)=>{
     var condition = {_id:req.params.id};
    randonneeModel
        .updateOne(condition,req.body)
        .then(result =>{
            console.log("mise a jour avec succes");
            res.send(result);
        })
        .catch(err =>{
            console.log(err);
        });
}

//Delete randonnee
exports.delete_randonnee=(req,res,next)=>{
   
   randonneeModel
       .findOneAndDelete({_id :req.params.id})
       .exec()
       .then(result =>{
           res.send("suppression avec succes");
       })
       .catch(err =>{
           console.log(err);
       });
}
