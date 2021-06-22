import polka from 'polka';
import cors from 'cors';
import { config } from 'dotenv';
import { readCache, getCacheUpdatedTime } from './cache';
import { readConfigFile } from './config';

config();

const { PORT } = process.env;

export const startServer = () => {
  polka()
    .use(cors({ origin: true }))
    .get('/', (reg, res) => {
      res.end(
        `Con Vote API is running, last updated on ${getCacheUpdatedTime()}`
      );
    })
    .get('/data', async (req, res) => {
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
    .get('/config', (req, res) => {
      try {
        res.end(readConfigFile());
      } catch (error) {
        res.statusCode = 500;
        res.end(error);
      }
    });
};
