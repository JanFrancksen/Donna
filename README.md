# Donna - a monorepo from the future

This is an opinionated starter template for a 2024 monorepo.
It aims to use blazingly fast and modern technology.

## Using this template

Create a repo based on this template and run

```sh
bun install
turbo dev
```

Make sure to have the Biome CLI installed and your IDE Setup to format with Biome.

## What's inside?

This monorepo includes the following apps/packages:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/tailwind-config`: `tailwind.config.js` and `postcss.config.js` to reuse in your packages
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This monorepo has some additional tools already setup for you:

- [Turborepo](https://turbo.build/) A high-performance build system / monorepo
- [NextJS](https://nextjs.org/) A NextJS 14 App
- [Tailwind](https://tailwindcss.com/) Tailwind to style your app
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting and formatting, build with Rust
- [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks, build with Go
- [CVA](https://cva.style/docs) for easy component variants
- [React-Aria-Components](https://react-spectrum.adobe.com/react-aria/components.html) for accessible headless components

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
turbo dev
```
