
//GET 'home' page
module.exports.loginHome = function(req,res){
    res.render('login', {title: 'Welcome to the home page'});
};