FROM mcr.microsoft.com/playwright:sha-691c38bf00d6c44d27711a1b790baec1d1348d9d

ENV TINI_VERSION v0.18.0
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD 1 
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini

ENTRYPOINT ["/tini", "--"]

WORKDIR /e2e

COPY . /e2e

RUN yarn 

CMD ["yarn", "run", "test"]