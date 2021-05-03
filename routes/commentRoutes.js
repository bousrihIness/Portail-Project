const router = require ('express').Router();

const commentController = require ('../controllers/commentController')



//ajout commentaire route
router.post('/add_comment/:idrandonnee', commentController.add_comment);
//get all comments by id-randonnee
router.get('/get_comments/:idrandonnee', commentController.get_Allcomments);
//delete comment by id-comment
router.delete('/delete_comment/:idrandonnee', commentController.delete_comment);
//update comment by id-comment
router.put('/update_comment/:idrandonnee', commentController.update_comment);





module.exports = router