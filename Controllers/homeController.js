const homeModel = require('../Models/homeModel');


module.exports.home= (req,res)=>{

    return res.render('public/home.ejs');

};

