This is a pet project of mine (@cutalion).
Here I'm learning how to build and deploy react application
with server-side rendering (+ graphql/apollo).

There is also a backend part of it running on ruby (hanamirb).
https://github.com/cutalion/meetups_backend

## Installation

Pull the repo and run `yarn && yarn dev` to install all dependencies,
start server and webpack.

## Backend

Backend has a `docker-compose.yml` config for those who don't want to install
ruby staff.

Just install docker, pull the backend repo and run `docker-compose up -d` in it.
You'll need to prepare DB (once). See https://github.com/cutalion/meetups_backend#installation

It will start the server on port 2300. Check the http://localhost:2300/graphiql
url first.
