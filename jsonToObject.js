const fs = require("fs");

/* fs.readFile(`./src/assets/json/12.json`, "utf8", (err, jsonString) => {
	if (err) {
		console.log("File read failed:", err);
		return;
	}
	console.log("File data:", JSON.parse(jsonString));
	let parsed = JSON.parse(jsonString);
	let obj = {
		id: 12,
		image: "./NFTImages/" + 12 + ".png",
		background: parsed.attributes[0].value,
		Skin: parsed.attributes[1].value,
		"Accessories 1": parsed.attributes[2].value,
		"Accessories 2": parsed.attributes[3].value,
		Head: parsed.attributes[4].value,
		Mouth: parsed.attributes[5].value,
		Eyes: parsed.attributes[6].value,
	};
	console.log(obj);
}); */
for (let i = 0; i < 3999; i++) {
	let obj;
	fs.readFile(`./src/assets/json/${i}.json`, "utf8", (err, jsonString) => {
		if (err) {
			console.log("File read failed:", err);
			return;
		}
		//console.log("File data:", JSON.parse(jsonString));
		let parsed = JSON.parse(jsonString);
		obj = {
			id: i,
			image: "../assets/NFTImages/" + i + ".png",
			attributes: parsed.attributes.map((item) => item.value),
		};
		fs.appendFile(
			"./src/assets/metadata.js",
			JSON.stringify(obj) + ",",
			(err, file) => {
				if (err) throw err;
				//console.log(i.toString());
			}
		);
	});
}
