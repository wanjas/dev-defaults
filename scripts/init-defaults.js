const fs = require('fs');
const path = require('path');

function searchForProjectRoot(moduleRoot) {
  const parts = moduleRoot.split('/node_modules');

  // we are sub-dependency or we have weird path, so we should NOT copy anything
  // normally moduleRoot is something like
  // /home/user/my_project/node_modules/@wanjas/dev
  if (parts.length != 2) {
    return null;
  }

  return parts[0];
}

function main() {
  const moduleRoot = path.resolve(__dirname, '..');
  const projectRoot = searchForProjectRoot(moduleRoot);

  console.log(`Module root: ${moduleRoot}`);
  console.log(`Project root: ${projectRoot}`);

  if (projectRoot) {
    const defaultFiles = ['.eslintrc.js', '.prettierrc.js', 'tsconfig.json'];

    defaultFiles.forEach((filename) => {
      const source = path.resolve(moduleRoot, '_default_files', filename);
      const destination = path.resolve(projectRoot, filename);

      if (!fs.existsSync(destination)) {
        if (!fs.existsSync(source)) {
          throw new Error(`There is no predefined file [${filename}]`);
        }

        console.log(`Created default [${filename}] in project`);
        fs.copyFileSync(source, destination);
      } else {
        console.log(`File [${filename}] exists in project`);
      }
    });
  }
  process.exit(0);
}

main();
