const Airtable = require("airtable");

require("dotenv").config();

const {
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_NAME,
  AIRTABLE_TABLE_NAME,
} = process.env;

const base = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey: AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_NAME);

const fetchData = async () => {
  const rawData = await base(AIRTABLE_TABLE_NAME)
    .select({
      view: "Grid view",
      maxRecords: 10,
    })
    .all();

  return JSON.stringify(rawData.map((record) => record.fields));
};

module.exports = {
  fetchData,
};
