# @t-nix/prettier

Shared Prettier configuration for your projects.

## Installation

```bash
npm install --save-dev @t-nix/prettier prettier
```

During installation, this package will:

1. Remove any existing `.prettierrc` files from the target project
2. Create a `prettier.config.mjs` file with your shared configuration

## Usage

Add to your `package.json`:

```json
{
 "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
}
```

## Included Plugins

- `@trivago/prettier-plugin-sort-imports` - Sort imports automatically
