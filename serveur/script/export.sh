#!/bin/bash

mongoexport --db TROC --collection biens --out ../JSON/biens.json
mongoexport --db TROC --collection membres --out ../JSON/membres.json
mongoexport --db TROC --collection services --out ../JSON/services.json
mongoexport --db TROC --collection disponibilites --out ../JSON/disponibilites.json
mongoexport --db TROC --collection utilisations --out ../JSON/utilisations.json
mongoexport --db TROC --collection descriptifBiens --out ../JSON/descriptifBiens.json
mongoexport --db TROC --collection descriptifServices --out ../JSON/descriptifServices.json 
