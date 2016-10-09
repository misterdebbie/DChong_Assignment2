//GET 'title edit' page
module.exports.titleEdit = function(req,res){
    res.render('title', {title:'edit the title page'});
};