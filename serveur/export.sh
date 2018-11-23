#!/bin/bash

mongoexport --db TROC --collection biens --out JSON/biens.json --jsonArray
mongoexport --db TROC --collection membres --out JSON/membres.json --jsonArray
