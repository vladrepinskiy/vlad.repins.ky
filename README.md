# Personal Website with React and Bun

This project is pared down to the bare minimum needed to build a static React site with Bun's bundler.

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
