const fs = require("fs");
const { fetchData } = require("./airtable");

const CACHE_DIR = ".temp";
const DATA_FILE = "cache.json";

const dataPath = `${CACHE_DIR}/${DATA_FILE}`;

const updateCache = async () => {
  const data = await fetchData();

  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }

  fs.writeFileSync(dataPath, data);
};

const readCache = async () => {
  if (!fs.existsSync(dataPath)) {
    await updateCache();
  }

  return fs.readFileSync(dataPath);
};

module.exports = {
  updateCache,
  readCache,
};
