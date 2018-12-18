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
				db.collection("membres").insertOne(req.query);
				res.send("Inscrit");
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

	//Fonctions rapport au biens
	//recherche bien générale
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


	app.post('/biensAjout', (req, res) => {
		db.collection("biens").insertOne({
			"nom": req.body.nom,
			"descriptif": req.body.descriptif,
			"prixNeuf": req.body.prix,
			"Actif": 1,
			"mailProp": req.body.mailProp
		});

		let rech = [];
		db.collection("biens").find({"nom": req.body.nom, "mailProp": req.body.mailProp})
		.toArray((err, documents) =>{
			for (let doc of documents){
				rech.push(doc);
			};
			console.log(rech);
		})
		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});

	app.get('/bienSupp/', (req, res) => {
		db.collection("biens").updateOne({"_id": req.query["_id"]}, {$set: {"Actif": 0}});

		db.collection("biens")
		.find()
		.toArray((err, documents)=> {
			 // la création de json ne sert à rien ici
			 // on pourrait directement renvoyer documents
			let json = [];
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

	//Fonctions rapport au service
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

	app.get('/serviceAjout', (req, res) => {
		if(db.collection("membres").find(req.query).count()===0){
			db.collection("service").insertOne(req.query);
			console.log("Ajout réussi");
		} else {
			console.log("Ce bien existe déjà");
		}
	});

	app.get('/serviceSupp/', (req, res) => {
		db.collection("services").updateOne({"idService": parseInt(req.query["idService"])}, {$set: {"Actif": 0}});

		db.collection("services")
		.find()
		.toArray((err, documents)=> {
			 // la création de json ne sert à rien ici
			 // on pourrait directement renvoyer documents
			let json = [];
			for (let doc of documents) {
				json.push(doc);
			};
			console.log(json);
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});

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

	//requete des membres
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

	app.get('/ban', (req, res) =>{
		console.log(req.query["_id"]);
		db.collection("membres").deleteOne({"_id": req.query["_id"]});
		db.collection("biens").deleteMany({"mailProp": req.query["mail"]});
		db.collection("biens")
		.find({"mailProp": req.query["mail"]})
		.toArray((err, documents) =>{
			for(let doc of documents){
				console.log(doc._id);
				db.collection("descriptifBiens").deleteOne({"idBien": doc._id});
			}
		});

		let json = [];
		res.setHeader("Content-type", "application/json");
		res.end(JSON.stringify(json));
	});
});

app.listen(8888);
