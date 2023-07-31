## react-quick-comp

A tool to facilitate the quick creation of React components via the command line.

### Description

`react-quick-comp` is a tool aimed at simplifying the creation of new React components in projects. With just one command, you can quickly generate the basic structure of a new component, allowing you to focus more on the specific logic of the component and less on the initial setup.

### Installation

To install the `react-quick-comp` tool globally, execute the following command:

```bash
npm install -g react-quick-comp
```

### Usage

**Note: Before running the following command, make sure to open the folder where you want to create the new component in your terminal.**

To create a new component, use the following command:

```bash
rqc create ComponentName
```

This will create a folder with the component name, containing the `index.js` file and the basic structure of the component.

### Documentation

#### Available flags:

- `--ts`: Creates a TypeScript component with an interface.
- `--css`: Creates a component with a style file (using styled-components).
- `--all`: Creates a component with a test file and style.

### Examples

Here are some examples of how you can use `react-quick-comp` to streamline your workflow:

1. Create a basic component:
```bash
rqc create Button
```

2. Create a TypeScript component with an interface:
```bash
rqc create Input --ts
```

3. Create a component with a style file using styled-components:
```bash
rqc create Card --css
```

### Contribution

Contributions are welcome! If you wish to collaborate with the project, follow the steps below:

1. Fork the `react-quick-comp` repository on GitHub.
2. Create a new branch with your modifications: `git checkout -b my-contribution`.
3. Make the desired changes and commit: `git commit -m "My contribution"`.
4. Send your changes to the remote repository: `git push origin my-contribution`.
5. Open a Pull Request so that your changes can be reviewed and incorporated into the project.

### Contributors

- [Max Wesley](https://github.com/MaxWesley) - Author and maintainer.
- [Cristian J. Ambrosi](https://github.com/cjambrosi) - Add husk with commitlint, update gitignore file and add .editorconfig.

### License

This project is licensed under the [MIT License](LICENSE).

### Contact

If you have any questions, suggestions, or need to get in touch, feel free to use one of the following methods:

- E-mail: maxwesleydev@gmail.com
- LinkedIn: [Max Wesley](https://www.linkedin.com/in/max-wesley-0b721a140/)
- GitHub: [MaxWesley](https://github.com/MaxWesley)

### GitHub

- Repository: [react-quick-comp](https://github.com/MaxWesley/react-quick-comp)

### NPM

- Package: [react-quick-comp](https://www.npmjs.com/package/react-quick-comp)