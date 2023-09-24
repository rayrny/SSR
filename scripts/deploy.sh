REPOSITORY=/home/ubuntu/SSR

cd $REPOSITORY

echo "yarn install"
yarn

echo "pm2 start"
pm2 delete "yarn start"
pm2 start "yarn start"