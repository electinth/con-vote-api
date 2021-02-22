# con-vote-api

API for [con-vote](https://github.com/electinth/con-vote) project to fetch and cache data from Airtable

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
  "title": "โหวตผ่าน-ไม่ผ่านมติแก้รัฐธรรมนูญ",
  "test": true,
  "live_vote_url": "http://localhost:5000/data",
  "test_live_vote_url": "http://localhost:5000/data",
  "start_live": "2020-11-19T12:00:00+0700",
  "end_live": "2020-11-19T14:10:00+0700",
  "stages": [
    {
      "key": "votelog1",
      "label": "ฉบับที่ 1",
      "title": "ฉบับที่ 2 = ตั้ง สสร. เสนอโดยรัฐบาล",
      "content": "ตั้งสภาร่างรัฐธรรมนูญ<br/>จำนวน 200 คน<br/>มาจากการเลือกตั้ง 150 คน<br/>(โดยใช้จังหวัดเป็นเขตเลือกตั้ง)<br/>และสรรหาอีก 50 คน / ห้าม<br/>แก้ไขหมวด 1 และ 2"
    }
  ]
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
