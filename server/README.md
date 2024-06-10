<h1 align="center">Interactive Forms</h1>

### Running locally


Configure the node version using nvm.

Use this command to set the correct node version:
```bash
nvm use
```
And install dependencies using:

```bash
 npm install
 ```

We're using **docker**, you have to install and configure [docker](https://www.docker.com/).
Once installed to up the app you have to use this command:

```bash
docker-compose up -d chat-dev
```

If you want to stop developing, you can stop the service running:

```bash
docker-compose down
```

This service going to help you to validate if the app is running correctly.

```bash
curl --request GET \
  --url http://localhost:3000/health
```

## ✏️ Commit standard

When you do some change in the app, you have to use the [standard for commits](https://www.conventionalcommits.org/en/v1.0.0/).
For instance:

```bash
feat: creating endpoint to get all sections
```

## ⚙️ Building

```bash
npm run build
```

## ✅ Testing

The service provide different scripts for running the tests, to run all of them you can run:

```bash
npm run test
```

If you are interested just in the unit tests, you can run:

```bash
npm run test:unit
```

Or if you want e2e tests, you can execute:

```bash
npm run test:e2e
```

We also have performance testing with [k6](https://k6.io/), if you want to run it via docker, execute:

```bash
docker-compose up k6
```

Or if you want to run it from your machine, execute:

```bash
brew install k6
npm run test:performance
```

## 💅 Linting

To run the linter you can execute:

```bash
npm run lint
```

And for trying to fix lint issues automatically, you can run:

```bash
npm run lint:fix
```

If you want prettier all app just use:

```bash
npm run prettier:fix
```
