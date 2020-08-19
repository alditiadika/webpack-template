SERVER_ENV=$1 # ex : dev / uat / prod
IMAGE_TAG=$2 # ex : 1.0.0-dev / 1.0.0-dev / 1.0.0

if [ -z "$SERVER_ENV" ]; then
  echo "Please provide server environment!"
  exit 1
fi

if [ -z "$IMAGE_TAG" ]; then
  echo "Please provide docker image tag!"
  exit 1
fi

set -e
cd $WORKSPACE/src/fms-web-$SERVER_ENV

sudo docker build --build-arg SERVER_ENV=$SERVER_ENV --build-arg VERSION=$IMAGE_TAG -t webpack-template:$IMAGE_TAG .