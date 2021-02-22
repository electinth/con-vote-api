const polka = require("polka");
const Airtable = require("airtable");

require("dotenv").config();

const {
  PORT,
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_NAME,
  AIRTABLE_TABLE_NAME,
} = process.env;

const base = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey: AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_NAME);

polka()
  .get("/", async (req, res) => {
    try {
      const rawData = await base(AIRTABLE_TABLE_NAME)
        .select({
          view: "Grid view",
          maxRecords: 10,
        })
        .all();
      const jsonData = rawData.map((record) => record.fields);
      res.end(JSON.stringify(jsonData));
    } catch (error) {
      res.status(500).end(error);
    }
  })
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Running on localhost:${PORT}`);
  });
