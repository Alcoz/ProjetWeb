"use strict"

var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = "mongodb://localhost:27017";
var express = require("express");
var cors = require('cors');
var app = express();
var bodyParser = require("body-parser");
var ObjectId = require("mongodb").ObjectId;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/*', (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
	next();
});

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
	let db = client.db("TROC");
	assert.equal(null, err);
	console.log("Connexion au serveur MongoDB réussi!");

	app.post('/register', (req, res) => {
		db.collection("membres").find({"mail": req.body.mail}).count()
	 	.then(function(numItems) {
			if(numItems===0){
				db.collection("membres").insertOne({
					"mail": req.body.mail,
					"MDP": req.body.MDP,
					"nom": req.body.nom,
					"prenom" : req.body.prenom,
					"Admin" : 0,
					"ville" : req.body.ville,
					"adresse" : req.body.adresse,
					"score" : 0
				});

				db.collection("membres").find({"mail": req.body.mail})
				.toArray((err, documents) => {
					let json = [];
					for(let doc of documents){
						json.push(doc);
					}
					res.setHeader("Content-type", "application/json");
					res.end(JSON.stringify(json));
				});
			} else {
				let json = [];
				res.setHeader("Content-type", "application/json");
				res.end(JSON.stringify(json));
			}
	 })
	});

	app.post('/connexion', (req, res) => {
		db.collection("membres").find({"mail": req.body.mail, "MDP": req.body.mdp}).count()
		.then(function(numItems){
			if(numItems===1){
				console.log("Connecter");
				db.collection("membres")
				.find({"mail": req.body.mail})
				.toArray((err, documents)=> {
					 // la création de json ne sert à rien ici
					 // on pourrait directement renvoyer documents
					 console.log("bon");
					let json = [];
					for (let doc of documents) {
						json.push(doc);
					};
					res.setHeader("Content-type", "application/json");
					res.end(JSON.stringify(json));
				});
				//res.send('Connecter');
			}else{
				console.log("pasbon");
				let json = [];
				res.setHeader("Content-type", "application/json");
				res.end(JSON.stringify(json));
				//res.send('Pas de compte');
			}
		})
	});

	//Renvoi tous les biens ou tous les services
	app.get('/biens', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		db.collection("biens").find().toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			};
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

	app.get('/services', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		db.collection("services").find().toArray((err, documents)=> {
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			};
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

	//Renvoi les biens selon un type de recheche différent
	app.get('/biensParam/', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");

		db.collection("biens")
		.find({"nom": new RegExp(req.query["nom"], "i")})
		.toArray((err, documents)=> {
			 // la création de json ne sert à rien ici
			 // on pourrait directement renvoyer documents
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			};
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

	app.get('/biensMotClef', (req, res) => {
		console.log("biensMotClef");
		db.collection("biens").aggregate([
			{
				$lookup:
				{
					from: "descriptifBiens",
					localField: "_id",
					foreignField: "idBien",
					as: "bienDesc"
				}
			}
		]).toArray(function(err, res2) {
			if (err) throw err;
			let json = [];
			let motClef = JSON.parse(req.query["motClef"]);
			for(let r of res2){
				for(let r2 of r.bienDesc){
					for(let mot of motClef){
						for(let mot2 of r2.motClef){
							if(!mot.localeCompare(mot2) && !json.includes(r)){
								json.push(r);
							}
						}
					}
				}
			}
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		})
	});

	//recherche bien propriéaire
	app.get('/biensProp/', (req, res) =>{
		res.setHeader("Access-Control-Allow-Origin", "*");
		let json = [];

		db.collection("biens")
		.find({"mailProp" : req.query["mailProp"]})
		.toArray((err, documents) => {
			for (let doc of documents){
				json.push(doc);

			};
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		})
	});

	//Renvoi les biens selon un type de recheche différent
	app.get('/serviceParam', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");

		console.log(req.query["nom"]);
		db.collection("service")
		.find({"nom": new RegExp(req.query["nom"], "i")})
		.toArray((err, documents)=> {
			 // la création de json ne sert à rien ici
			 // on pourrait directement renvoyer documents
			console.log(req.query);
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			};
			console.log(json);
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

	app.get('/servicesMotClef', (req, res) => {
		db.collection("services").aggregate([
			{
				$lookup:
				{
					from: "descriptifServices",
					localField: "_id",
					foreignField: "idService",
					as: "serviceDesc"
				}
			}
		]).toArray(function(err, res2) {
			if (err) throw err;
			let json = [];
			let motClef = JSON.parse(req.query["motClef"]);
			for(let r of res2){
				for(let r2 of r.serviceDesc){
					for(let mot of motClef){
						for(let mot2 of r2.motClef){
							if(!mot.localeCompare(mot2) && !json.includes(r)){
								json.push(r);
							}
						}
					}
				}
			}
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		})
	});
	app.get('/servicesProp/', (req, res) =>{
		console.log(req.query["mailProp"]);
		res.setHeader("Access-Control-Allow-Origin", "*");
		let json = [];

		db.collection("services")
		.find({"mailProp" : req.query["mailProp"]})
		.toArray((err, documents) => {
			for (let doc of documents){
				json.push(doc);
			};
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		})
	});

	//Ajout, modification et suppression des biens
	app.post('/biensAjout', (req, res) => {
		db.collection("biens").insertOne({
			"nom": req.body.nom,
			"descriptif": req.body.descriptif,
			"prixNeuf": req.body.prix,
			"Actif": 1,
			"mailProp": req.body.mailProp
		});

		db.collection("biens").find({"nom": req.body.nom, "mailProp": req.body.mailProp})
		.toArray((err, documents) => {
			for(let doc of documents){
				db.collection("disponibilites").insertOne({
					"bienOuService" : "bien",
					"idBienOuService":	doc._id,
					"dateDebut" : req.dateDebut,
					"dateFin" : req.dateFin
				})
			}
		})

		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	app.get('/bienModif', (req, res) =>{
		db.collection("biens").updateOne({"_id": req.query["_id"]}, {$set: {"nom": req.query["nom"], "descriptif": req.query["descriptif"], "prixNeuf": req.query["prixNeuf"]}});
		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	app.get('/bienSupp/', (req, res) => {
		db.collection("biens").updateOne({"_id": req.query["_id"]}, {$set: {"Actif": 0}});

		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	//Ajout, modification et suppression des services

	app.post('/serviceAjout', (req, res) => {
		db.collection("service").insertOne({
			"descriptif": req.body.descriptif,
			"prix": req.body.prix,
			"mailProp": req.body.mailProp,
			"Actif": 1
		})

		db.collection("services").find({"descriptif": req.body.descriptif, "mailProp": req.body.mailProp})
		.toArray((err, documents) => {
			for(let doc of documents){
				db.collection("disponibilites").insertOne({
					"bienOuService" : "bien",
					"idBienOuService":	doc._id,
					"dateDebut" : req.dateDebut,
					"dateFin" : req.dateFin
				})
			}
		})
		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	app.get('/serviceModif', (req, res) =>{
		db.collection("services").updateOne({"_id": req.query["_id"]}, {$set: {"descriptif": req.query["descriptif"], "prix": req.query["prix"]}});
		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	app.get('/serviceSupp/', (req, res) => {
		db.collection("services").updateOne({"_id": req.query["_id"]}, {$set: {"Actif": 0}});

		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	//requete sur les disponibilites et les emprunt
	app.get('/disponibilitesAjout', (req, res) =>{
		db.collection("disponibilites").find({"idBienOuService": req.query["idBienOuService"]})
		.toArray((err, documents) =>{
			let json = [];
			let rdd = new Date(req.dateDebut);
			let rdf = new Date(req.dateFin);

			for(let doc of douments){
				let ddd = new Date(doc.dateDebut);
				let ddf = new Date(doc.dateFin);

				if((rdd > ddf) && (rdf < ddd)){
					let json = [];
					res.setHeader("Content-type", "application/json");
					res.end(JSON.stringify(json));
				}
			}

		});
	});

	app.get('/emprunt', (req, res) =>{
		
	});

	app.get('/empruntDate', (req, res) =>{

	});


	//requete sur les membres
	app.get('/membres', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		db.collection("membres").find().toArray((err,documents)=>{
			let json = [];
			for(let doc of documents){
				json.push(doc);
			};
			console.log(json);
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

	app.get('/membresMail', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		db.collection("membres").find({"mail": new RegExp(req.query["mail"])}).toArray((err,documents)=>{
			let json = [];
			for(let doc of documents){
				json.push(doc);
			};
			console.log(json);
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

	app.get('/membresDes', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		db.collection("membres").find({"score" : {$lte: -5}}).toArray((err,documents)=>{
			let json = [];
			for(let doc of documents){
				json.push(doc);
			};
			console.log(json);
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

	app.get('/avertissement', (req, res) =>{

		db.collection("membres").updateOne({"_id": ObjectId(req.query["_id"])}, {$set: {"avert": 1}});
		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	app.get('/suppAvertissement', (req, res) =>{

		db.collection("membres").updateOne({"_id": ObjectId(req.query["_id"])}, {$set: {"avert": 0}});
		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	app.get('/ban', (req, res) => {
		db.collection("membres").deleteOne({"_id": ObjectId(req.query["_id"])});
		db.collection("biens").deleteMany({"mailProp": req.query["mail"]});
		db.collection("biens")
		.find({"mailProp": req.query["mail"]})
		.toArray((err, documents) =>{
			for(let doc of documents){
				db.collection("descriptifBiens").deleteOne({"idBien": doc._id});
			}
		});

		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});
});

app.listen(8888);
