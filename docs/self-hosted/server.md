---
sidebar_position: 1
---

# Server

Launch a new server and connect to it using SSH.

## Install Node.JS

NiekForm requires Node.js version 17 or higher. You can check your Node.js version by running the following command:

### Installing Node.JS with NVM

Check the [nvm](https://github.com/nvm-sh/nvm) repository for the latest installation instructions.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Install the latest version of node.

```bash
nvm install --lts
```

### Installing yarn

I like yarn, let's install it.

```bash
npm install -g yarn
```

### Cloning the repository

Clone the repository and install the dependencies.

```bash
git clone {your-repository-url}
cd niekform
yarn
```

### Set environment variables

```bash
cp .env.example .env
```

Edit the `.env` file and set the environment variables.

| Key | Explanation | Example |
| --- | --- | --- |
| POSTGRES_PASSWORD | Generate some password to be used for postgres authentication | (some string) |
| DATABASE_URL | Make sure this contains the POSTGRES_PASSWORD | postgresql://niekform:{POSTGRES_PASSWORD}@localhost:5432/niekform?schema=public |
| EMAIL_FROM | The email address you want to send email from | niek@example.com |
| EMAIL_SERVER_USER | Your email server user | apikey (for sendgrid) |
| EMAIL_SERVER_PASSWORD | Your email server password | SG.abcdefghijklmnopqrstuvwxyz |
| EMAIL_SERVER_HOST | Your email server host | smtp.sendgrid.net |
| EMAIL_SERVER_PORT | Email server port | 465, 587 |
| NEXT_PUBLIC_SITE_URL | The URL of your site | https://niekform.vercel.app |
| NEXTAUTH_SECRET | A random string of characters | any random string |
| DATABASE_PROVIDER | The database provider (e.g. postgres), make sure this is the same as the one you set in your `prisma/schema.prisma` file | postgres/mysql |

## Installing docker & docker-compose

Read the latest [Docker documentation](https://docs.docker.com/get-docker/) to install Docker on your system.

### Debian like systems

See [here](https://docs.docker.com/engine/install/debian/)

### Docker-compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

```bash
sudo chmod +x /usr/local/bin/docker-compose
```
