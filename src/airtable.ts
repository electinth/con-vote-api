import Airtable from 'airtable';

const { AIRTABLE_API_KEY, AIRTABLE_BASE_NAME, AIRTABLE_TABLE_NAME } =
  process.env;

if (!AIRTABLE_BASE_NAME || !AIRTABLE_TABLE_NAME) {
  throw 'Airtable config is not defined';
}

const base = new Airtable({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_NAME);

export const fetchData = async () => {
  const rawData = await base(AIRTABLE_TABLE_NAME)
    .select({
      view: 'Grid view',
    })
    .all();

  return JSON.stringify(rawData.map((record) => record.fields));
};
