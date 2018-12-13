"use strict"
var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = "mongodb://localhost:27017";

var biensResearch = function(db, filtre){
	app.get('/biens/', (req, res) => {
		//console.log("route: /biens/");
		console.log("req.query");
		db.collection("biens").find(filtre).toArray((err, documents)=> {
			 // la création de json ne sert à rien ici
			 // on pourrait directement renvoyer documents
			let json = [];
			for (let doc of documents) {
				console.log(doc);
				json.push(doc);
			};
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});
};

var biensInsert = function(db, tuple){
	db.collection("biens").insertOne(tuple);
};

var membresResearch = function(db, filtre){
	app.get('/membres/', (req, res) => {
		console.log("route: /biens/");
		db.collection("biens").find(filtre).toArray((err, documents)=> {
			 // la création de json ne sert à rien ici
			 // on pourrait directement renvoyer documents
			let json = [];
			for (let doc of documents) {
				console.log(doc);
				json.push(doc);
			};
			res.setHeader("Content-type", "application/json");
			res.end(JSON.stringify(json));
		});
	});
};

var inscription = function(db, tuple){
	db.collection("membres").insertOne(tuple);
}

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
	let db = client.db("TROC");
	assert.equal(null, err);
	console.log("Connexion au serveur MongoDB réussi!");

	app.get('/', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		next();
	});

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

	app.get('/biens', (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		console.log(req.query);
		db.collection("biens").find(req.query).toArray((err, documents)=> {
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

	app.post('/biens', (req, res) => {
		//console.log("sqsqfsqfsqf");
		//biensResearch(db, req.query);
	});

	app.post('/biensAjout/', (req, res) =>{

		inscription(db, req.query);
	});

	app.post('/inscription/', (req, res) => {
		inscription(db, req.query);
	});

	app.post('/rechercheMembre/', (req, res) => {
		membresResearch(db, req.query); 
	})
});

app.listen(8888);
