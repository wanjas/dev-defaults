const fs = require("fs");
const path = require("path");

function main() {
  const moduleRoot = path.resolve(__dirname, "..");
  const projectRoot = process.cwd();

  console.log(`Module root: ${moduleRoot}`);
  console.log(`Project root: ${projectRoot}`);

  const defaultFiles = [".eslintrc.js", ".prettierrc.js", "tsconfig.json"];

  defaultFiles.forEach((filename) => {
    const source = path.resolve(moduleRoot, "_default_files", filename);
    const destination = path.resolve(projectRoot, filename);

    if (!fs.existsSync(destination)) {
      if (!fs.existsSync(source)) {
        throw new Error(`There is no predefined file [${filename}]`);
      }

      console.log(`Created default [${filename}] in project`);
      // fs.copyFileSync(source, destination);
    } else {
      console.log(`File [${filename}] exists in project`);
    }
  });
  process.exit(0);
}

main();
