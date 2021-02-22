const fs = require("fs");

const CONFIG_PATH = "config.json";

const readConfigFile = () => {
  if (!fs.existsSync(CONFIG_PATH)) {
    throw "Config file not found";
  }

  return fs.readFileSync(CONFIG_PATH);
};

module.exports = {
  readConfigFile,
};
