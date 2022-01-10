#!/usr/bin/env bash

cd mywebapp
./build.sh
cd ../grafana
./build.sh
cd ../apache
./build.sh
cd ..
docker-compose build