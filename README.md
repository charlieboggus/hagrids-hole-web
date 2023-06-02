# hagrids-hole-web

Source code for [Hagrid's Hole Web](http://hagridshole.com)

## Local Setup

- run ```npm i``` to install node_module dependencies

- create the file ```./src/env.ts``` and have it contain the following:
```ts
export default class {
  public static readonly API_GATEWAY_URL =
    'API_GATEWAY_URL'

  public static readonly COWBOY_TOKEN =
    'COWBOY_CLICKER_TOKEN'
}

```

## Scripts

- serve: ```npm run serve``` - starts local development server at localhost:8080

- build: ```npm run build``` - builds the webapp for production

- lint: ```npm run lint``` - checks for lint errors

- deploy: ```npm run deploy``` - builds the webapp for production and uses the AWS cli to deploy the distribution to the appropriate S3 bucket. NOTE: you will need to modify the bucket name in ```package.json``` to the bucket you're using to host the webpage
