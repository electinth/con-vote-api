const { updateCache } = require("./cache");
const { startServer } = require("./server");

require("dotenv").config();

const { UPDATE_INTERVAL } = process.env;

const reloadData = async () => {
  const timestamp = new Date().toLocaleString();

  try {
    await updateCache();
  } catch (e) {
    console.error(e);
  }

  console.info(`> Data updated at ${timestamp}`);
};

const main = async () => {
  await reloadData();

  startServer();

  setInterval(reloadData, +UPDATE_INTERVAL);
};

main();
