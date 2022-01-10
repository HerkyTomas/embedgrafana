# embedgrafana
Embedded Grafana panel in a React web UI

Build It:
- 
- prerequisites:
  - node/npm
  - docker
  - docker-compose

- build steps:
  - ./build.sh
    - ... builds in mywebapp (builds the build html/js/jcss)
    - ... builds in apache (copies over the mywebapp files to prep for Dockerfile use)
    - ... builds in grafana (no-op)
  - docker-compose build
    - ... builds apache docker image
    - ... builds the grafana docker image

Run it:
-
  - docker-compose up
  - login with 'myuser'/'mypassword'
