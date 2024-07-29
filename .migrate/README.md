## What's here?

### 1. Webpack Configuration Overview

This configuration file is tailored for bundling and processing Queensland Health (QH) common files in a Webpack setup. It includes several plugins and rules that manage the styling, scripting, and optimization of these files. Here's a breakdown of its key components:

#### Entry and Output
- **Entry Points**: Specifies the starting points for the bundling process, including the global SASS file and the main JavaScript file.
- **Output**: Defines the output directory and filename pattern for the bundled files.

#### Modules and Rules
- **SCSS Files**: Uses a series of loaders to process SCSS files. This includes extracting CSS into separate files, using PostCSS for autoprefixing, and Sass for SCSS compilation.
- **JavaScript Files**: Babel-loader is used to transpile JavaScript files, excluding node_modules.

### Plugins
1. **MiniCssExtractPlugin**: Extracts CSS into separate files. It supports on-demand-loading of CSS and SourceMaps.
2. **CleanWebpackPlugin**: Cleans up the `dist` folder before building, ensuring that only used files are bundled.
3. **CssMinimizerPlugin**: Minimizes CSS for optimal performance.

#### Optimization
- Enables CSS minimization in the production environment to reduce file size and improve load times.

This configuration is particularly focused on a production build, ensuring optimized, clean, and maintainable output. It's customized to handle specific QH project requirements.