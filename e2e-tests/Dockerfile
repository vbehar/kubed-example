FROM mcr.microsoft.com/playwright:bionic

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini

ENTRYPOINT ["/tini", "--"]

WORKDIR /e2e

COPY . /e2e

RUN yarn 

CMD ["yarn", "run", "test"]