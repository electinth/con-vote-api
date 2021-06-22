import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { readCache, getCacheUpdatedTime } from './cache';
import { readConfigFile } from './config';

config();

const { PORT } = process.env;

export const startServer = () => {
  express()
    .use(cors())
    .get('/', (req, res) => {
      res.send(
        `Convote API is running, last updated on ${getCacheUpdatedTime()}`
      );
    })
    .get('/data', async (req, res) => {
      try {
        res.send(await readCache());
      } catch (error) {
        console.log(error);
        res.statusCode = 500;
        res.send(error);
      }
    })
    .get('/config', (req, res) => {
      try {
        res.send(readConfigFile());
      } catch (error) {
        res.statusCode = 500;
        res.send(error);
      }
    })
    .listen(PORT, () => {
      console.info(`> API Server running on port ${PORT}`);
    });
};
