FROM alpine

ADD https://storage.googleapis.com/kubernetes-release/release/v1.18.6/bin/linux/amd64/kubectl /usr/local/bin/kubectl

RUN apk --no-cache -U add gettext && chmod +x /usr/local/bin/kubectl
COPY . .

ENTRYPOINT ["ash", "-c", "./deploy"]