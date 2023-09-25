REPOSITORY=/home/ubuntu/SSR

cd $REPOSITORY

echo "yarn install"
yarn

echo "pm2 start"
pm2 delete "yarn start -p 8000"
pm2 start "yarn start -p 8000"