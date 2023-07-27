const yargs = require("yargs");
const fs = require("fs-extra");
const ejs = require("ejs");
const path = require("path");

yargs.command(
  "gavea-component <componentName>",
  "Cria um novo componente React",
  (yargs) => {
    yargs
      .positional("componentName", {
        describe: "Nome do componente a ser criado",
        type: "string",
      })
      .option("typescript", {
        alias: "ts",
        describe: "Criar componentes com arquivos TypeScript (.tsx)",
        type: "boolean",
      })
      .option("stylesheet", {
        alias: "css",
        describe: "Criar arquivo de estilos (styles.ts)",
        type: "boolean",
      })
      .option("test", {
        alias: "t",
        describe: "Criar arquivo de teste (index.test.tsx)",
        type: "boolean",
      });
  },
  async (argv) => {
    const { componentName, typescript, stylesheet, test } = argv;

    const folderPath = path.join(process.cwd(), componentName);
    const TEMPLATE = typescript
      ? "templates/typescript"
      : "templates/javascript";
    const templatesFolderPath = path.join(__dirname, TEMPLATE);

    if (fs.existsSync(folderPath)) {
      throw new Error("O componente já existe! \n\n\n");
    }

    fs.mkdirSync(folderPath);

    const indexTemplate = fs.readFileSync(
      path.join(
        templatesFolderPath,
        typescript ? "component.tsx.ejs" : "component.jsx.ejs"
      ),
      "utf-8"
    );
    const indexContent = ejs.render(indexTemplate, { componentName });
    fs.writeFileSync(
      path.join(folderPath, typescript ? "index.tsx" : "index.jsx"),
      indexContent
    );

    if (stylesheet) {
      const stylesTemplate = fs.readFileSync(
        path.join(
          templatesFolderPath,
          typescript ? "styles.ts.ejs" : "styles.js.ejs"
        ),
        "utf-8"
      );
      fs.writeFileSync(
        path.join(folderPath, typescript ? "styles.ts" : "styles.js"),
        stylesTemplate
      );
    }

    if (test) {
      const testTemplate = fs.readFileSync(
        path.join(
          templatesFolderPath,
          typescript ? "test.tsx.ejs" : "test.jsx.ejs"
        ),
        "utf-8"
      );
      const testContent = ejs.render(testTemplate, { componentName });
      fs.writeFileSync(
        path.join(folderPath, typescript ? "index.test.tsx" : "index.test.jsx"),
        testContent
      );
    }

    console.log(`Componente ${componentName} criado com sucesso!`);
  }
).argv;
