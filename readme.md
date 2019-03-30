# Ingesting and Serving Project Guttenberg books to Elastic Search

## Steps for installing the stack locally

    docker-compose up -d --build

## Loading the data

    docker exec gs-api "node" "server/load_data.js"

## A sample search with the ES Rest API

```
GET /library/_search?q=text:Java&amp; pretty HTTP/1.1
Host: localhost:9200
cache-control: no-cache
Postman-Token: 95013f61-e77d-4d43-9058-f834964c62cf

```
