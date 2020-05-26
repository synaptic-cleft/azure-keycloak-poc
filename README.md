# build and upload docker image

docker login --username=dockersidn --password=yourpassword
docker build -t dockersidn/azure-keycloak-poc:v1 .
sudo docker push dockersidn/azure-keycloak-poc:v1



kubectl apply -f frontend-poc.yml

kubectl get service azure-keycloak-poc --watch
