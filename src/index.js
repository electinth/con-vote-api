const polka = require("polka");
const { readCache } = require("./cache");

require("dotenv").config();

const { PORT } = process.env;

polka()
  .get("/", async (req, res) => {
    try {
      res.end(await readCache());
    } catch (error) {
      res.status(500).end(error);
    }
  })
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> API Server running on port ${PORT}`);
  });
