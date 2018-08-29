# Puppetpoke

Simple poke about having a dockerized puppeteer and test some script

This repository is based on [docker-puppeteer](https://github.com/alekzonder/docker-puppeteer) by [@alekzonder](https://github.com/alekzonder/) and have a simple tweak about set the host `$UID` to `pptruser` and avoid permission issue.

```bash
git clone https://github.com/T-Francis/puppetpoke.git \
&& echo HOST_UID=$UID > .env \
&& docker-compose up
```

Will build up the puppeteer container and run the well know `get-started.js` script 
