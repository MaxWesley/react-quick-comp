const { readFileSync, writeFileSync } = require("fs-extra");
const { render } = require("ejs");
const { join } = require("path");

const TEMPLATE_FOLDER_WEB = "templates/web";
const TEMPLATE_FOLDER_MOBILE = "templates/mobile";

const { TEMPLATE_EXTENSIONS } = require("./template-extensions");

function createComponentFile(componentName, fileType, isTypeScript, isNative) {
  if (!componentName || !fileType) {
    throw new Error("Component name and file type must be provided.");
  }

  const templateExtension =
    TEMPLATE_EXTENSIONS[fileType][isTypeScript ? "ts" : "js"];

  const templateFolder = isNative ? TEMPLATE_FOLDER_MOBILE : TEMPLATE_FOLDER_WEB;
  const scriptFolder = isTypeScript ? "typescript" : "javascript";

  let fileName = "";
  if (fileType === "component") {
    fileName = `index.${isTypeScript ? "tsx" : "jsx"}`;
  } else if (fileType === "test") {
    fileName = `index.test.${isTypeScript ? "tsx" : "jsx"}`;
  } else {
    fileName = `${fileType}.${templateExtension}`;
  }

  fileName += '.ejs';

  const filePath = join(__dirname, templateFolder, scriptFolder, fileName);
  
  console.log({ filePath });

  const fileContent = render(readFileSync(filePath, "utf-8"), {
    componentName,
  });

  const formattedFileName = fileName.split('.ejs')[0];
  
  writeFileSync(
    join(process.cwd(), componentName, formattedFileName),
    fileContent
  );
}

module.exports = { createComponentFile };
