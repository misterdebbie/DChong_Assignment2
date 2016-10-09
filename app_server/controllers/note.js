//GET 'note' page
module.exports.noteEdit = function (req,res){
    res.render('note', {title: 'edit your notes here'});
};