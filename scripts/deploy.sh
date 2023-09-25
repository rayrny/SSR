REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

yarn

# echo "pm2 start"
# pm2 delete "yarn start -p 8000"
# pm2 start "yarn start -p 8000"
NODE_ENV=production node ./dist/server/main.js