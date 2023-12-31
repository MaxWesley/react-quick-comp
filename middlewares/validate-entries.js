function validateEntries(argvs) {
  const { componentName } = argvs;

  if (typeof componentName !== "string") {
    throw new Error("Invalid component name type");
  }
  
  if (typeof componentName.includes(' ')) {
    throw new Error("Invalid component name. There cannot be blank characters in your component name.");
  }

  if (componentName.at(0).toUpperCase() !== componentName.at(0)) {
    throw new Error("Invalid component name. The first character must be uppercase. Try again.");
  }
}

module.exports = { validateEntries };