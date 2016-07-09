#!/bin/bash

cd pages


for d in ./*/
do (cd "$d" && npm install)
done