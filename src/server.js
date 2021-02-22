const polka = require("polka");
const { readCache, getCacheUpdatedTime } = require("./cache");
const { readConfigFile } = require("./config");

require("dotenv").config();

const { PORT } = process.env;

const startServer = () => {
  polka()
    .get("/", (reg, res) => {
      res.end(
        `Con Vote API is running, last updated on ${getCacheUpdatedTime()}`
      );
    })
    .get("/data", async (req, res) => {
      try {
        res.end(await readCache());
      } catch (error) {
        console.log(error);
        res.statusCode = 500;
        res.end(error);
      }
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.info(`> API Server running on port ${PORT}`);
    })
    .get("/config", (req, res) => {
      try {
        res.end(readConfigFile());
      } catch (error) {
        res.statusCode = 500;
        res.end(error);
      }
    });
};

module.exports = {
  startServer,
};
