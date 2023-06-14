const path = require('path');
const fs = require('fs');
const Handlebars = require('handlebars');

export default function HTMLPlugin() {
  return {
    name: 'html-compiler',
    generateBundle() {
      compileHTMLs('src/html','dist');
      console.log('HTML files compiled');
    }
  };
};

function parseArgs(args, id) {
  const regEx = /"([^"]+)":\s*(require\('(.*)'\))/g;
  const argsObj = {};
  let match;
  while ((match = regEx.exec(args)) !== null) {
    const [ , key, , filePath ] = match;

    // Resolve absolute path to file
    const absPath = filePath;
    let result;
    if (filePath.endsWith('.json')) {
      // If file is JSON, read and parse file
      const fileContent = fs.readFileSync(absPath, 'utf-8');
      result = JSON.parse(fileContent);
    } else if (filePath.endsWith('.hbs') || filePath.endsWith('.html')) {
      // If file is Handlebars or HTML, compile and execute with provided arguments
      const fileContent = fs.readFileSync(absPath, 'utf-8');
      const template = Handlebars.compile(fileContent);
      const regExNested = /\$\{require\('([^']*)'\)\(([\s\S]*?)\)\}/g;
      let nestedMatch;
      const nestedArgsObj = {};
      while ((nestedMatch = regExNested.exec(fileContent)) !== null) {
        const [ , nestedFilePath, nestedArgs ] = nestedMatch;
        const nestedAbsPath = path.resolve(path.dirname(absPath), nestedFilePath);
        if (nestedFilePath.endsWith('.json')) {
          const nestedFileContent = fs.readFileSync(nestedAbsPath, 'utf-8');
          nestedArgsObj[nestedFilePath] = JSON.parse(nestedFileContent);
        } else if (nestedFilePath.endsWith('.hbs') || nestedFilePath.endsWith('.html')) {
          const nestedFileContent = fs.readFileSync(nestedAbsPath, 'utf-8');
          const nestedTemplate = Handlebars.compile(nestedFileContent);
          nestedArgsObj[nestedFilePath] = nestedTemplate(nestedArgs ? parseArgs(nestedArgs, id) : {});
        }
      }
      result = template(nestedArgsObj);
    }
    argsObj[key] = result;
  }
  return argsObj;
}

function resolveRequires(code, id) {
  // Regex to match ${require()} with or without line breaks and white spaces
  const regEx = /\$\{require\('([^']*)'\)\(([\s\S]*?)\)\}|\$\{require\(['"](.+?)['"]\)(\((.+?)\))?\}/g;

  let match;
  while ((match = regEx.exec(code)) !== null) {
    const [ , filePath1, args1, filePath2, hasArgs, args2] = match;
    // Use the matched groups from the correct part of the regex
    const filePath = filePath1 || filePath2;
    const args = args1 || args2;

    // Resolve absolute path to file
    const absPath = path.resolve(path.dirname(id), filePath);

    let result;
    if (filePath.endsWith('.json')) {
      // If file is JSON, read and parse file
      const fileContent = fs.readFileSync(absPath, 'utf-8');
      result = JSON.parse(fileContent);
    } else if (filePath.endsWith('.hbs') || filePath.endsWith('.html')) {
      // If file is Handlebars or HTML, compile and execute with provided arguments
      const fileContent = fs.readFileSync(absPath, 'utf-8');
      const template = Handlebars.compile(fileContent);
      const argsObj = args ? parseArgs(args, id) : {};
      
      result = template(argsObj);
      
    }
    // Replace the fullMatch in the code with the result
    code = code.replace(match[0], result);
  }

  return code;
}

// Compile Handlebars
function compileHTMLs(srcPath, distPath,) {
  // HTML Folder
  const htmlFolder = fs.readdirSync(srcPath);

  // Loop each html file
  htmlFolder.forEach(file => {
    const filePath = path.join(srcPath, file);
    let htmlData = fs.readFileSync(filePath, 'utf-8');
    // Resolve require & compile handlebars here
    htmlData = resolveRequires(htmlData, filePath);

    const distFilePath = path.join(distPath, file);
    fs.writeFileSync(distFilePath, htmlData);
  });
}