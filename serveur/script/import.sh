#!/bin/bash

mongoimport --db TROC --collection biens --file ../JSON/biens.json --jsonArray
mongoimport --db TROC --collection membres --file ../JSON/membres.json --jsonArray
mongoimport --db TROC --collection services --file ../JSON/services.json --jsonArray
mongoimport --db TROC --collection disponibilites --file ../JSON/disponibilites.json --jsonArray
mongoimport --db TROC --collection emprunt --file ../JSON/emprunt.json --jsonArray
mongoimport --db TROC --collection descriptifBiens --file ../JSON/descriptifBiens.json --jsonArray
mongoimport --db TROC --collection descriptifServices --file ../JSON/descriptifServices.json --jsonArray
