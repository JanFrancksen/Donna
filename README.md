# Donna - a monorepo from the future 

This is a starter template for a 2024 monorepo.
It aims to use blazingly fast and modern technology.

## Using this template 

Clone this repo and run 

```sh
pnpm install
pnpm dev
```

Make sure to have the Biome CLI installed and your IDE Setup to format with Biome.

## What's inside?

This monorepo includes the following apps/packages:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@tailwind-config`: `tailwind.config.js` and `postcss.config.js` to reuse in your packages
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind](https://tailwindcss.com/) Tailwind to style your app
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting and formatting
- [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```