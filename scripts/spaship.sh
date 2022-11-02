
#!/bin/bash

npm run build && 
cp spaship.yaml dist/ &&
cd dist && tar -zcvf ../build.tar.gz . && cd .. &&
spaship --version &&
spaship deploy build.tar.gz --env=$1 --apikey=$2 --ref=$3