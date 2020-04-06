var express = require("express"),
	doCall 	= require("./seed");
	app 	= express();

const API = "https://corona.lmao.ninja/countries";

app.use(express.static("public"));
app.set("view engine", "ejs");




app.get("/", async (req, res) => {

	doCall(API, async (data) => {
		for (var i = 0; i < data.length; i++) {
			if (data[i].country === "Sweden") {
				var sweden = data[i];
				res.render("index", {
					sweden: sweden
				});
			}
		}
	});
});

const port = 3000;
app.listen(port, () => console.log(`Server started on ${port}`));