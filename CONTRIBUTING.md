# Contributing

Thank you for your interest in contributing to this design system. This document outlines the process for contributing to this project.

## Getting Started

### Prerequisites

-   Node: v16.20.0
-   NPM: 8.19.4

### Local Development Setup

1. Clone the repository
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run serve
    ```

    This will launch the Design System in your browser with hot-reload enabled.

## Component Development Workflow

### Creating a New Component

1. Run the component creation script:

    ```bash
    npm run add-component
    ```

2. Follow the prompts to name your component
3. The script will:
    - Create the component directory structure
    - Set up template files
    - Add the component to the navigation

### Component Structure

Each component should include:

1. **Data Structure** (`js/manifest.json`):

    - Define component metadata
    - Set default values
    - Configure conditional display rules

2. **Markup Template** (`html/component.hbs`):

    - Create the component structure using HandlebarsJS
    - Follow component markup conventions

3. **Styling** (`css/component.scss`):

    - Use BEM methodology for class names (e.g., `.qld__component--variant`)
    - Follow mobile-first approach
    - Use provided mixins for responsive design

4. **JavaScript** (`js/global.js`):
    - Add client-side functionality
    - Document all functions with JSDoc comments

### Development and Testing

1. View your component at `/component-[name].html` in the local development server
2. Test the component with different input data
3. Ensure responsiveness across all breakpoints

### Building and Committing

Before submitting your changes:

1. Build the component for production:

    ```bash
    npm run build
    ```

    This generates the compiled Handlebars template and import.xml file.

2. Run linting:

    ```bash
    npm run lint
    ```

3. Commit your changes using clear, descriptive messages

## Pull Request Process

1. Fork the repository and create a branch for your changes
2. Ensure your code follows our coding standards and guidelines
3. Update documentation if your changes affect it
4. Test your changes thoroughly

### Pull Request Labeling

Apply one of the following labels to categorise your pull request:

-   **major**

    -   For significant changes requiring careful review
    -   Examples: Breaking changes, major feature enhancements
    -   Expect a thorough review process

-   **minor**

    -   For smaller, backward-compatible changes
    -   Examples: New features, improvements
    -   Generally follows a quicker review process

-   **patch**
    -   For minor bug fixes and patches
    -   Examples: Bug fixes, small improvements
    -   Typically fast-tracked for swift review and merging

### Submitting the Pull Request

-   Provide a clear, descriptive title
-   Include a comprehensive description of the changes
-   Reference any relevant issues
-   Ensure all checks pass

## Coding Standards

### HTML/Handlebars

-   Follow semantic HTML practices
-   Use BEM methodology for class names
-   Use provided Handlebars helpers for conditional logic

### CSS/SCSS

-   Follow BEM naming convention
-   Use mobile-first approach
-   Implement responsive design using provided mixins:

    ```scss
    @include QH-media(sm) {
    } // >sm breakPoint
    @include QH-media(md) {
    } // >md breakPoint
    @include QH-media(lg) {
    } // >lg breakPoint
    @include QH-media(xl) {
    } // >xl breakPoint
    @include QH-media(xxl) {
    } // >xxl breakPoint
    ```

### JavaScript

-   Document all functions using JSDoc format
-   Follow project conventions for event handling
-   Ensure accessibility compliance

## Communication

Feel free to reach out if you have questions or need assistance. We appreciate your contributions and look forward to collaborating with you.

