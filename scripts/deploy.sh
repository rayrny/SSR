REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

# yarn install --production
yarn install --production

# echo "pm2 start"
# pm2 delete "yarn start -p 8000"
# pm2 start "yarn start -p 8000"
NODE_ENV=production node ./public/dist/server/main.js