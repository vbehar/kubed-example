# kubed-delivery-test

Minimalistic mono-repo example


## Local testing notes

```shell
docker build -t registry.toc.systems/kubed-delivery-test/devops devops/
docker build -t registry.toc.systems/kubed-delivery-test/webapp webapp
docker build -t registry.toc.systems/kubed-delivery-test/backend backend

docker push registry.toc.systems/kubed-delivery-test/devops
docker push registry.toc.systems/kubed-delivery-test/webapp
docker push registry.toc.systems/kubed-delivery-test/backend

docker run --rm \
	-e DNS_DOMAIN=toc.systems \
	-e SYSTEM_NAME=kubed-test-app \
	-e BACKEND_IMAGE=registry.toc.systems/kubed-delivery-test/backend \
	-e WEBAPP_IMAGE=registry.toc.systems/kubed-delivery-test/webapp \
	-e INSTANCE=myinstance \
	-v $HOME/.kube/toc:/root/.kube/config \
	-it registry.toc.systems/kubed-delivery-test/devops
```
