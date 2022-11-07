const glob = require('glob');
const fs = require('fs');
var path = require("path");
const apiDir = `./dist/api/service_finder`;

// A JavaScript class.
class JsonMergePlugin {
    constructor(options = {}) {
      this.options = options;
    }

    apply(compiler) {
      const inputPath = this.options.input;
      const outputPath = this.options.output.endsWith('/') ? this.options.output.slice(0, -1) : this.options.output;

      const output = {};

      glob(inputPath, (error, files) => {
          files.forEach((filename) => {
              const contents = JSON.parse(fs.readFileSync(filename, 'utf8'));
              var key = path.basename(filename, path.extname(filename));
              output[key] = contents;
          });

          if(!fs.existsSync(apiDir)) {
            fs.mkdirSync(apiDir, {recursive: true});
          }

          fs.writeFileSync(outputPath, JSON.stringify(output));
      });

    }
}

module.exports = JsonMergePlugin;
