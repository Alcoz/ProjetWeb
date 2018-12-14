"use strict"
var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = "mongodb://localhost:27017";
var querystring = require('querystring');

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
	let db = client.db("TROC");
	assert.equal(null, err);
	console.log("Connexion au serveur MongoDB réussi!");

	app.get('/', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		next();
	});

	app.get('/inscription/', (req, res) => {
		if(db.collection("membres").find(req.query["mail"]).count()===0){
			inscription(db, req.query);
			console.log("Inscrit");
		} else {
			console.log("Déjà inscrit");
		}
	});

	//Fonctions rapport au biens
	app.get('/biens', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");

		console.log(req.query["nom"]);
		db.collection("biens")
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

	app.get('/biensAjout', (req, res) => {
		if(db.collection("membres").find(req.query).count()===0){
			db.collection("biens").insertOne(req.query);
			console.log("Ajout réussi");
		} else {
			console.log("Ce bien existe déjà");
		}
	});

	app.get('/biensSupp', (req, res) => {
		console.log({"idbien": parseInt(req.query["idBien"])});
		db.collection("biens").updateOne({"idBien": parseInt(req.query["idBien"])}, {$set: {"Actif": 0}});

		db.collection("biens")
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

	//Fonctions rapport au service
	app.get('/service', (req, res) => {
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

	app.get('/serviceSupp', (req, res) => {
		db.collection("service").updateOne({"idServ": parseInt(req.query["idServ"])}, {$set: {"Actif": 0}});
	});

	/*app.get('/emprunt', (req, res) => {
		if(db.collection("biens").find(req.query))
	});*/
	
	app.get('/biensRecents', (req, res) => {
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


	/*
	app.post('/rechercheMembre/', (req, res) => {
		membresResearch(db, req.query);
	});*/
	
});

app.listen(8888);
