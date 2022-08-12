# Setup Node.js with Express, Typescript, Nodemon, ESLint, Prettier, Husky, Lint staged, Jest, supertest, Swagger UI, Swagger-jsdoc and VS Code Debug

  Setup of a Node.js API with tools that help alot in development. August 2022.

  - Node.js
  - Yarn
  - Express
  - Typescript
  - Nodemon
  - ESLint
  - Prettier
  - Husky
  - Lint staged
  - Jest
  - Supertest
  - Swagger
  - Swagger-jsdoc
  - VS Code Debug

## Example Routes
  - GET / 
  - GET /examples/findByName
  - GET /examples/{id}
  - POST /example
  - PUT /example/{id}

## Installation
  - [Node.js](https://nodejs.org/) 16.14.2
  - [Yarn](https://yarnpkg.com/) 1.22.19 (optional)

  ```shell
  $ yarn install
  ```

  Enable Husky Git hooks
  ```shell
  $ yarn prepare
  ```

## Lint
  ```shell
  $ yarn lint
  ```

## Development
  ```shell
  $ yarn dev
  ```

## Development with debug
  ```shell
  $ yarn debug
  ```

## Run tests
  ```shell
  $ yarn test
  ```

## Build
  ```shell
  $ yarn build
  ```

## Staging
  ```shell
  $ yarn staging
  ```

## Production
  ```shell
  $ yarn prod
  ```