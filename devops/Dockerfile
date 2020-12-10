FROM alpine

ADD https://storage.googleapis.com/kubernetes-release/release/v1.18.6/bin/linux/amd64/kubectl /usr/local/bin/kubectl
ARG AWS_IAM_AUTHENTICATOR_URL=https://amazon-eks.s3.us-west-2.amazonaws.com/1.17.7/2020-07-08/bin/linux/amd64/aws-iam-authenticator
ADD ${AWS_IAM_AUTHENTICATOR_URL} /usr/local/bin/aws-iam-authenticator

RUN apk --no-cache -U add gettext && chmod +x /usr/local/bin/kubectl && chmod +x /usr/local/bin/aws-iam-authenticator
COPY . .

ENTRYPOINT ["ash", "-c", "./deploy"]