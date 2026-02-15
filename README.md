## Local development

- Install dependencies:

```bash
npm install
```

- Run the dev server:

```bash
npm run dev
```

- Run lint:

```bash
npm run lint
```

## Production build

Build the optimized static site into `dist`:

```bash
npm run build
```

You can preview the production build locally:

```bash
npm run preview
```

## Vercel deployment

This project is configured to deploy on Vercel as a static Vite site.

- Root directory: project root (where this README and package.json live)
- Build command: `npm run build`
- Output directory: `dist`

There is a `vercel.json` file at the project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Steps to deploy on Vercel

1. Push this project to a Git provider (GitHub, GitLab, or Bitbucket).
2. In the Vercel dashboard, click “New Project” and import the repository.
3. Confirm:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click “Deploy”.

On subsequent pushes to the main branch (or the branch you connect), Vercel will automatically build and deploy the updated site.
