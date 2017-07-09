

var db = require("...models");

module.exports = function(app) {

//GET route for finding all burger entries
app.get("/burgers", function(req, res){
	db.burger.findAll({}).then(function(dbBurger){
		res.json(dbBurger);
	});
});

//POST method for adding another burger
app.post("/burgers", function(req, res){
	db.burger.create({
		burger_name: req.body.params,
		//devoured: false
	}).then(function(dbBurger){
		res.json(dbBurger);
	});
});

//PUT method for updating burgers and making sure that
app.put("/burgers", function(req, res){
	db.burger.update({
		devoured: true
	})
})


























}