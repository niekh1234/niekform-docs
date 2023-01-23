---
sidebar_position: 1
---

# Database with PlanetScale

With the [NiekForm](https://github.com/niekh1234/niekform) repository cloned and a PlanetScale account we can get started.

## Creating a database using PlanetScale dashboard

### Create a PlanetScale database

Once you're signed in, click on the "Create a database" button. Name your database niekform, select the region closest to you, and click "Create database".

### Set up branches

Click on your NiekForm database in the dashboard, and then click on the "Branches" tab in the top nav.

From here, click the "New branch" button. Name the branch initial-setup, keep main as the base branch, select the region closest to you, and click "Create branch".

### Copy the database URL

Go to the branch you just created and click on the "Connect" button. Select "Connect with: NodeJS" and copy the environment variable.

## Configuring the environment file

Get started by copying the `.env.example` file to `.env` and filling in the values.

```bash
cp .env.example .env
```

```bash title=".env"
DATABASE_PROVIDER=mysql
DATABASE_URL={YOUR_DATABASE_URL}
```

## Configuring prisma

As prisma does not allow a dynamic database provider, make sure it is set to `mysql` in the `prisma/schema.prisma` file.

```prisma title="prisma/schema.prisma"
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

## Installing dependencies

```bash
yarn
```

## Running migrations

```bash
yarn prisma migrate dev --name init
```

That's it, let's verify we have tables created on PlanetScale.

Go to your branch and click on the "Console" tab.

```sql
SHOW TABLES;
```

If you see tables like `Account`, `Field`, `Form` you're good to go.
