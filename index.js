#!/usr/bin/env node

const yargs = require("yargs");
const { createComponent } = require("./utils/create-component");

yargs.command(
  "create <componentName>",
  "Cria um novo componente React",
  (yargs) => {
    yargs
      .positional("componentName", {
        describe: "Nome do componente a ser criado",
        type: "string",
      })
      .option("triad", {
        alias: "all",
        describe: "Cria os 3 arquivos principais: componente, styles e test",
        type: "boolean",
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
  (argv) => {
    try {
      createComponent(argv);
    } catch (error) {
      console.error("Erro ao criar componente:", error.message);
    }
  }
).argv;
