# Queensland Government Design System - Vanilla

This is the 'Vanilla' version of the Queensland Government Design System, built and maintained by Queensland Health's Digital Experience Team.

This codebase is designed around the principle of reduce reliance on 3rd party libraries and framework lock in. We will continue to reduce this reliance over time.

For more information on the Queensland Government Design System and other codebases, please visit - [Queensland Government Design System](https://www.designsystem.qld.gov.au).

### Inclusions
- Public NPM release package:
  - https://www.npmjs.com/package/@qhealth-design-system/core
- Figma
  - [QGDS Figma](https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?m=auto&node-id=6902-69802&t=q6FMpeH4XPs1hjP1-1)

## Technical overview
- **Webpack** – Bundling, transpilation, and asset optimisation
- **Sass + PostCSS** – CSS preprocessing and automatic prefixing
- **HandlebarsJS** – Component and HTML templating
- **Storybook** – Component development, testing, and documentation
- **Hot Module Reloading (HMR)** – Live HTML/JS/CSS updates during development
- **Figma** – Design, prototyping, and collaboration
- **NPM** – Package management and build automation

## Documentation
- Storybook documentation is available at [https://qld-health-online-team.github.io/design-system](https://qld-health-online-team.github.io/design-system)

## Development Getting started

### Requirements
- Node: v20.19.1
- NPM: 10.8.2

Download repo

```bash
git clone https://github.com/Qld-Health-Online-Team/design-system.git
cd design-system
```

Install dependencies

```bash
npm install
```

Build the Design System CSS, JS, Components and templates

```bash
npm run build
```

Build Storybook for Component development
        
```bash
npm run build-storybook
npm run storybook
```

Lint

```bash
npm run lint
```

Unit tests

```bash
npm run test
```

## GitHub Actions

- [NPM package](https://www.npmjs.com/package/@qhealth-design-system/core) publishing and release management
- Automated [Semantic versioning](https://semver.org) for patch, minor, and major releases
- Automated CI/CD validation for pull requests
- Automated GitHub io static documentation for [Storybook](https://storybook.js.org) build and deployment workflows
- [Chromatic](https://www.chromatic.com) visual regression testing on pull requests and master (see below)

### Chromatic visual tests

Chromatic snapshots every Storybook story and compares it to the last accepted baseline. Our plan has a monthly snapshot quota, so the workflow (`.github/workflows/chromatic.yml`) only builds when the result will be looked at:

| When | Chromatic runs? |
|---|---|
| Draft PR | No. Iterate freely. |
| PR into `master` or a `release-*` branch, ready for review | Yes, on every push |
| Merge to master | Yes, which sets the baselines that later PRs compare against |
| The release job's `chore: release` commit | No. It only touches `dist/` and version metadata. |
| Changes only to `*.md`, `docs/` or `dist/` | No |
| PR from a fork | No |

Need a build on a draft? Open **Actions → Chromatic → Run workflow** and pick your branch.

**A green "Run Chromatic" job does not mean nothing changed.** The job passes whenever the build uploads. The result is in Chromatic's own **UI Tests** and **UI Review** checks on the PR. Click through to accept or deny each visual change. Accepted changes become the baseline once merged.

Builds use [TurboSnap](https://www.chromatic.com/docs/turbosnap/), so only stories affected by the changed files are re-captured. Unchanged stories still cost about a fifth of a snapshot each, which is why we skip builds rather than relying on TurboSnap alone.

You can use any IDE of your choice. Our development team uses Visual Studio Code (VS Code) with the following recommended extensions:
- Prettier
- ESLint
- [HandlebarsJS](https://handlebarsjs.com) Template Support

## Accessibility

This repository is tested against the Web Content Accessibility Guidelines (WCAG) 2.2 Level A and AA to help ensure a high standard of accessibility. 
We follow the Queensland Government's digital accessibility requirements to support equitable access to information, services, and opportunities.

### Communication

If you have a suggestion for improvement or find an issue, please raise an issue in this repository.