# Queensland Government Design System - Vanilla JS

This is the 'Vanilla' version of the Queensland Government Design System, built and maintained by Queensland Health's Digital Experience Team.
This codebase is designed around the principle of reduce reliance on 3rd party libraries and framework lock in. We will continue to reduce this reliance over time.

For more information on the Queensland Government Design System and other codebases, please visit - [Queensland Government Design System](https://www.designsystem.qld.gov.au).

### Inclusions
- Public NPM Release package:
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
- **npm** – Package management and build automation

## Documentation
- Storybook documentation is available at [https://qld-health-online-team.github.io/design-system](https://qld-health-online-team.github.io/design-system)

## Development Getting started

### Quick build

If you hava java and maven installed. This will pull in a local node/npm version and run through the full lifecycle build.

```bash
git https://github.com/Qld-Health-Online-Team/design-system.git
cd design-system
mvn install
```

### Requirements
- Node: v20.19.1
- NPM: 10.8.2

### Standard build

Download repo

```bash
git clone https://github.com/Qld-Health-Online-Team/design-system.git
```

Install dependencies

```bash
npm install
```

Build the Design System CSS, Components and templates

```bash
npm run build
```

Static view, start a local server from /dist folder

```bash
npm run serve
```

Build Storybook for component development
        
```bash
npm run build-storybook
npm run storybook
```

Lint

```bash
npm run lint
```

### Unit Tests

Unit tests may be created and run via `vitest`.

```bash
npm run test
```

## GitHub Actions
- Automated CI/CD validation for pull requests
- [NPM package](https://www.npmjs.com/package/@qhealth-design-system/core) publishing and release management
- [Semantic versioning](https://semver.org) for patch, minor, and major releases
- Automated [Storybook](https://storybook.js.org) build and deployment workflows
- [Chromatic](https://www.chromatic.com) visual regression testing on master and release branches

You can use any IDE of your choice. Our development team uses Visual Studio Code (VS Code) with the following recommended extensions:
- Prettier
- ESLint
- [HandlebarsJS](https://handlebarsjs.com) Template Support

## Accessibility

This repository is tested against the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA to help ensure a high standard of accessibility. 
We follow the Queensland Government's digital accessibility requirements to support equitable access to information, services, and opportunities.

### Communication

If you encounter an accessibility issue or have suggestions for improvement, please raise an issue in this repository.
