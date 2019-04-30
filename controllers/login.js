var express = require('express');
var sellerModel = require.main.require('./model/seller-model');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	
	var user ={
		uemail : req.body.uemail,//uname
		password : req.body.password
	};
	
	sellerModel.validate(user, function(result){
		if(result.length > 0){
			req.session.name = result[0].first_name;
			req.session.uid = result[0].u_id;
			res.redirect('/seller');
		}else{
			res.render("login/index");
		}
	});
});

module.exports = router;