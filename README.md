
# QGDS Vanilla - Prototype only

Developed using the QLD Health Design System (refractored).

## How to run locally:
- Fork this repository so you can inherit upstream enhancements
- 'npm install' to install local dependencies 
- 'npm run storybook' for local development
- 'npm run build-storybook' to generate a static copy
- 'npm run create' to scaffold a new component/pattern (defaults to /extended sub folder in either)

## Generating new elements (extended)
- After running the 'create command' you will asked if you'd like to create a 'Component' or 'Pattern'
- A component is a functional element 
- A pattern is a page template or pattern combining multiple elements (use case e.g Search)
- You will be asked to type in a 'name'
- By default, plop is configured to create a set of new assets (.hbs, .functions.js, .scss, .data.json and .stories.js). This will be automatically generated under either ./src/components/extended or ./src/patterns/extended.
- This will automatically work in Storybook after generating (boilerplate).
- This configured exists inside the root directories plopfile.js

## How to update your forked copy 
#### Fetch Upstream Updates:
> - Ensure your local repository has a reference to the upstream repository.
    git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git 
> - Fetch the latest changes from the upstream repository.
    git fetch upstream
#### Merge Upstream Changes:
> - Checkout your main branch.
    git checkout main
> - Merge the fetched changes from the upstream repository into your local main branch.
    git merge upstream/main
> - Resolve any conflicts (If there are any conflicts, resolve them and commit the changes)
    git push origin main

## How to contribute back your 'extended' component or pattern

- Make sure all your changes are committed to your forked repository (either as 'core' or 'extended' element, based on needs of the community group)
- Create a Pull Request:
    > - Navigate to the original repository on GitHub.
    > - Click on the "New pull request" button.
    > - Select your fork and branch (feature branch using conventions seen in the parent) from which you want to merge changes.
    > - Provide a meaningful title and description for your pull request.
- Submit the pull request.
    > - The maintainers of the original repository will review your pull request.
    > - Be responsive to any feedback or requests for changes.
- Merge:
    > - Once approved, your changes will be merged into the original repository.
    > - Follow the steps above in 'How to update your forked copy' to inherit new core or extended elements (from the pull request).

## Import Styles and JavaScript

### Background:
The intention of the repository is to offer a method to migrate 1 or more components (as per a feature request) to a completely new repository, and change the format of the output.
- ```./migrate``` folder will be deleted at the end of the project (temporary files for Storybook migration/compiling components)