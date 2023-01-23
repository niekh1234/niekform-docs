---
sidebar_position: 0
---

# Prerequisites

## Hardware

NiekForm is a relatively light NodeJS application that should be able to run with 1 vCPU and 1GB of RAM. But we recommend more resources for a better experience.

## Software

### Operating system

This guide will only cover debian based systems like Ubuntu, but NiekForm should work on any system that supports Node.js.

### Node.js

NiekForm requires Node.js version 17 or higher. You can check your Node.js version by running the following command:

```bash
node --version
```

If you don't have Node.js installed, you can download it from the [Node.js website](https://nodejs.org/en/download/) or use a package manager like [nvm](https://github.com/nvm-sh/nvm)

### Process manager

We recommend using [PM2](https://pm2.keymetrics.io/) to manage your Node.js application. You can check the [PM2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start/) to install PM2 on your system.

### Database

We recommend using [Postgres](https://www.postgresql.org/) or [MySQL](https://www.mysql.com/), any other database is not currently tested but should work.

#### Docker

NiekForm can spawn a Docker container to run a Postgres database. You can check the [Docker documentation](https://docs.docker.com/get-docker/) to install Docker on your system.

### Reverse proxy

We recommend using a reverse proxy like [Nginx](https://www.nginx.com/) or [Apache](https://httpd.apache.org/). This is not required, but it is recommended. Our documentation will only cover a basic nginx configuration.

### SSL certificate

We recommend using a certificate from a trusted certificate authority like [Let's Encrypt](https://letsencrypt.org/).

CloudFlare also provides free SSL certificates and is a great option for keeping your server secure, but understably some people don't want to use CloudFlare for PCI compliance reasons or similar.

### Mail server

We recommend using a service like [SendGrid](https://sendgrid.com/) or [Mailgun](https://www.mailgun.com/). But NiekForm can support any SMTP server.
