#!/bin/bash

cd pages


for d in ./*/
do (cd "$d" && ln -s ../../node_modules node_modules)
done

for d in ./*/
do (cp ../webpack.config.js "$d")
done

cd ..