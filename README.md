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

3. Start server

- Development mode (with hot reload)

```bash
yarn dev
```

- Production mode

```bash
yarn serve
```
