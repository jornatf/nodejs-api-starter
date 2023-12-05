# nodejs-api-starter

**A Starter Node.js API skeleton.**

## Setup

### Installation

1. First, click on the **"Use this template"** button.
2. Install all npm packages with the command:
```bash
$ npm install
```
### Environment

You can type command: 

```bash
$ cp .env.example .env
```

or manually create  a `.env` file to the project root and copy/paste this default variables:

```
API_ENV=dev
API_VERSION=1.0.0
PORT=8000
```

### Default packages installed

| Package | Description | Docs |
|---|---|---|
| **express** | API calling and routes | [https://expressjs.com/](https://expressjs.com/) |
| **nodemon** | API rendering in Real-time | [https://nodemon.io/](https://nodemon.io/) |
| **dotenv** | Environment manager | [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) |

## Testing and development

```bash
# Run
$ npm run dev

# or if you have nodemon installed globally
$ nodemon server.js
```

This command will execute `nodemon server.js` command. For each code update, `nodemon` will restart automatically.

## Deployment

You can deploy with **Vercel**: [see more](https://vercel.com/) and check `vercel.json` file.

👇 Clone and Deploy now HERE by clicking here

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjornatf%2Fnodejs-api-starter)

## Licence and contributing

Current licence is `MIT`.

**You are free to modify and improve this git project.**
