# build and upload docker image

docker login --username=dockersidn --password=yourpassword
docker build -t dockersidn/azure-keycloak-poc:v1 .
sudo docker push dockersidn/azure-keycloak-poc:v1

# frontend in Azure
vi frontend-poc.yml
kubectl apply -f frontend-poc.yml
kubectl get service azure-keycloak-poc --watch

# keycloak container
https://hub.docker.com/r/jboss/keycloak  
docker run -p 8080:8080 jboss/keycloak  
docker run -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak

docker run -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \
    -e KEYCLOAK_IMPORT=/tmp/example-realm.json -v /tmp/example-realm.json:/tmp/example-realm.json jboss/keycloak

docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e DB_VENDOR=H2 jboss/keycloak
