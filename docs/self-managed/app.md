---
sidebar_position: 2
---

# Hosting with Vercel

Make sure you have the NiekForm repository forked and cloned on the Github account you use on Vercel. See the [previous](/docs/self-managed/database) section for more information.

## Creating a Vercel project

Head over to the Vercel dashboard and create a new project with the Niekform repository. You can leave everything as-is, NiekForm is a Next.js application and Vercel will automatically detect that.

### Environment variables

Make sure you enter the following environment variables:

| Key | Explanation | Example |
| --- | --- | --- |
| DATABASE_URL | The database URL you copied from PlanetScale | mysql://.... |
| EMAIL_FROM | The email address you want to send email from | niek@example.com |
| EMAIL_SERVER_USER | Your email server user | apikey (for sendgrid) |
| EMAIL_SERVER_PASSWORD | Your email server password | SG.abcdefghijklmnopqrstuvwxyz |
| EMAIL_SERVER_HOST | Your email server host | smtp.sendgrid.net |
| EMAIL_SERVER_PORT | Email server port | 465, 587 |
| NEXT_PUBLIC_SITE_URL | The URL of your site | https://niekform.vercel.app |
| NEXTAUTH_SECRET | A random string of characters | any random string |
| DATABASE_PROVIDER | The database provider (e.g. mysql), make sure this is the same aws the one you set in your `prisma/schema.prisma` file | mysql/postgres |

### Deploying

You can now deploy your application to Vercel. Once your deployment is finished you can optionally set up a custom domain.
