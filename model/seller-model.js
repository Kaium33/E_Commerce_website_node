var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from user where u_id="+userId;

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getProduct: function(productId, callback){
		var sql = "select * from products where product_id="+productId;

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from products";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	getAllorderd_products: function(callback){
		// var sql = "select * from products,order_t,user where order_t.seller_id = user.u_id and order_t.product_id = select product_id from products";
		var sql = "select * from order_t , user where order_t.seller_id = user.u_id ";
		// var sql1 = "select * from order_t , user where order_t.seller_id = user.u_id";

		db.getResult(sql, function(results){
			callback(results);
		});
		// db.getResult(sql1, function(results1){
		// 	callback(results1);
		// });
	},
	getAllreturn_request: function(returnId, callback){
		var sql = "select * from return_t where seller_id="+returnId;

		db.getResult(sql, function(results){
			callback(results)
		});
	},
	delete_return_request: function(productId, callback){
		var sql = "delete from return_t where return_id="+productId;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where u_email='"+user.uemail+"' and u_password='"+user.password+"'";

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	insert: function(product, callback){
		var sql = "insert into products values (null, '"+product.product_name+"','"+product.product_price+"','"+product.product_avlble+"','"+product.product_sell_price+"','"+product.product_original_price+"','"+product.category_id+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(product, callback){
		var sql = "update products set product_name='"+product.productName+"',product_price='"+product.productPrice+"', product_avlble='"+product.productAvlble+"', product_sell_price='"+product.productSellPrice+"', product_original_price='"+product.productOriginalPrice+"', category_id='"+product.categoryId+"' where product_id="+product.productId;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(productId, callback){
		var sql = "delete from products where product_id="+productId;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	get_confirming_orderd_products: function(productId, callback){
		var sql = "select * from order_t where order_id="+productId;

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	delete_confirmed_order_from_database: function(productId, callback){
		var sql = "delete from order_t where order_id ="+productId;

		db.execute(sql,function(result){
			callback(result);
		});
	}
}



