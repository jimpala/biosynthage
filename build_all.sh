#!/bin/bash

cd pages
for d in ./*/
do (cd "$d" && npm run build)
done

cd ..
