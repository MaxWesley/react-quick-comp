const { createComponentFile } = require("./create-component-file");
const { existsSync, mkdirSync } = require("fs-extra");
const { join } = require("path");

function createComponent(argvs) {
  const { componentName, typescript, stylesheet, test, all, native } = argvs;

  const folderPath = join(process.cwd(), componentName);

  if (existsSync(folderPath)) {
    throw new Error(`O componente "${componentName}" já existe.`);
  }

  mkdirSync(folderPath);

  if (all) {
    createComponentFile(componentName, "component", typescript, native);
    createComponentFile(componentName, "styles", typescript, native);
    createComponentFile(componentName, "test", typescript, native);
    console.log(`Componente "${componentName}" criado com sucesso!`);

    return;
  }

  createComponentFile(componentName, "component", typescript, native);
  if (stylesheet) {
    createComponentFile(componentName, "styles", typescript, native);
  }
  if (test) {
    createComponentFile(componentName, "test", typescript, native);
  }

  console.log(`Componente "${componentName}" criado com sucesso!`);
}

module.exports = { createComponent };
