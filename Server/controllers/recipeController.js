const fs = require('fs');

const getRecipes = (req, res) => {
	try {
		fs.readFile(__dirname + "./../" + "recipes_data.json", "utf-8", (err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Unable to read posts");
				return;
			}
			res.status(200).send(JSON.parse(data));
		});
	} catch (error) {
		console.error(error);
		res.status(500).send("Error in getting posts.");
	}
}

module.exports = { getRecipes }