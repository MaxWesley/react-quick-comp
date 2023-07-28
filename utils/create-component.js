const { createComponentFile } = require("./create-component-file");
const { existsSync, mkdirSync } = require("fs-extra");
const { join } = require("path");

function createComponent(argvs) {
  const { componentName, typescript, stylesheet, test, all } = argvs;
  const folderPath = join(process.cwd(), componentName);

  if (existsSync(folderPath)) {
    throw new Error(`O componente "${componentName}" já existe.`);
  }

  mkdirSync(folderPath);
  console.log(`Pasta do componente "${componentName}" criada com sucesso.`);

  if (all) {
    createComponentFile(componentName, "component", typescript);
    createComponentFile(componentName, "styles", typescript);
    createComponentFile(componentName, "test", typescript);
  } else {
    createComponentFile(componentName, "component", typescript);
    if (stylesheet) {
      createComponentFile(componentName, "styles", typescript);
    }
    if (test) {
      createComponentFile(componentName, "test", typescript);
    }
  }

  console.log(`Componente "${componentName}" criado com sucesso!`);
}

module.exports = { createComponent };
