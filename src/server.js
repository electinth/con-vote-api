const polka = require("polka");
const { readCache } = require("./cache");

require("dotenv").config();

const { PORT } = process.env;

const startServer = () => {
  polka()
    .get("/", async (req, res) => {
      try {
        res.end(await readCache());
      } catch (error) {
        console.log(error);
        res.status(500).end(error);
      }
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.info(`> API Server running on port ${PORT}`);
    });
};

module.exports = {
  startServer,
};
