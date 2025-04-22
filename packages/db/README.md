# Database readme

The database package uses the following packages 
- [Drizzle ORM](https://orm.drizzle.team/) as the ORM
- [Better Auth](https://www.better-auth.com) for authentication
- [Polar](https://docs.polar.sh/) for payments

## Setup 
make sure the necessary environment variables are set in your `.env` file.

You need the following environment variables:

```bash
# For the Database
DATABASE_URL=postgres://user:password@localhost:5432/dbname

# For Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret

# For Polar
POLAR_ACCESS_TOKEN=pk_live_1234567890
SUCCESS_URL=https://example.com/success
```

## Dev Server and Sandbox
To run the dev server, use the following command:

```bash 
bun dev:web-new
```

This spins up a docker container with postgres and starts the dev server on https://localhost:3000.

To get a visual representation of the database, you can start drizzle studio with the following command:

```bash 
bun db:studio
```

You can configure the polar.sh sandbox on https://sandbox.polar.sh/dashboard/arstarsstarst