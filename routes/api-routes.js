

var db = require("...models");

module.exports = function(app) {

//GET route for finding all burger entries
app.get("/burgers", function(req, res){
	db.burger.findAll({}).then(function(dbBurger){
		res.json(dbBurger);
	});
});

//POST method for adding another burger
app.post("/burgers/create", function(req, res){
	db.burger.create({
		burger_name: req.body.params,
	}).then(function(dbBurger){
		res.json(dbBurger);
	});
});

//PUT method for updating burgers to devoured
app.put("/burgers/update", function(req, res){
	db.burger.update({
		devoured: true
	}, {
		where: {
			id: req.body.id
		}
	}).then(function(dbBurger){
		res.json(dbBurger);
	});
  });
};


























}