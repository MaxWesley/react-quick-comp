
const { readFileSync, writeFileSync } = require("fs-extra");
const { render } = require("ejs");
const { join } = require("path");

const TEMPLATE_FOLDER = "templates";

const { TEMPLATE_EXTENSIONS } = require("./template-extensions");

function createComponentFile(componentName, fileType, typescript) {
  const templateExtension =
    TEMPLATE_EXTENSIONS[fileType][typescript ? "ts" : "js"];

  const filePath = join(
    __dirname,
    TEMPLATE_FOLDER,
    typescript ? "typescript" : "javascript",
    `${fileType}.${templateExtension}.ejs`
  );

  const fileContent = render(readFileSync(filePath, "utf-8"), {
    componentName,
  });

  const fileExtension = typescript ? "tsx" : "jsx";
  const fileName =
    fileType === "component"
      ? `index.${fileExtension}`
      : `${fileType}.${fileExtension}`;

  writeFileSync(join(process.cwd(), componentName, fileName), fileContent);
  console.log(`Arquivo "${fileName}" criado.`);
}

module.exports = { createComponentFile };
