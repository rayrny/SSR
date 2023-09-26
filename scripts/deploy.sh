REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

# 의존성 설치
yarn install --production

# echo "pm2 start"
pm2 delete "yarn start -p 8000"
pm2 start "yarn start -p 8000"