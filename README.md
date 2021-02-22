# con-vote-api

API for consitution vote project to fetch and cache data from Airtable

## Setup

1. Install dependencies

```bash
yarn
```

2. Config `.env` file

```env
PORT=<server_port>
AIRTABLE_API_KEY=<airtable_api_key>
AIRTABLE_BASE_NAME=<airtable_base_name>
AIRTABLE_TABLE_NAME=<airtable_table_name>
UPDATE_INTERVAL=<cache_update_interval_in_milliseconds>
```

3. Add `config.json` for frontend

```json
{
  "test": true,
  "live_vote_url": "http://localhost:3000/data",
  "test_live_vote_url": "http://localhost:3000/data",
  "start_live": "2020-11-19T12:00:00+0700",
  "end_live": "2020-11-19T14:10:00+0700"
}
```

3. Start server

- Development mode (with hot reload)

```bash
yarn dev
```

- Production mode

```bash
yarn serve
```
