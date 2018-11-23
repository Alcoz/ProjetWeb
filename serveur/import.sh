#!/bin/bash

mongoimport --db TROC --collection biens --file JSON/biens.json --jsonArray
mongoimport --db TROC --collection membres --file JSON/membres.json --jsonArray