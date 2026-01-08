# Personal Website with React and Bun

This project is pared down to the bare minimum needed to build a static React site with Bun's bundler. Using goober for css-in-jss and wouter for super light client side routing.

Install dependencies:

```bash
bun install
```

Start hot-reload dev preview (no API/server layer, just the bundled HTML):

```bash
bun run dev
```

Create deployable static assets in `dist/`:

```bash
bun run build
```

Code quality:

```bash
# Check lint errors
bun run lint

# Auto-fix lint issues
bun run lint:fix

# Format everything with Prettier
bun run format
```

## Now Page Posts

Images for now page posts must be imported in `src/constants/now.constant.ts` to be bundled by Bun. Add the import and include the filename in `NOW_IMAGE_MAP` to make it available for use in posts.
