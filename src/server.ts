import express from 'express';
import cors from 'cors';
import { readCache, getCacheUpdatedTime } from './cache';
import configFile from './config.json';

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
    .get('/config/runtime', (req, res) => {
      try {
        res.send(configFile.runtime);
      } catch (error) {
        res.statusCode = 500;
        res.send(error);
      }
    })
    .get('/config/build', (req, res) => {
      try {
        res.send(configFile.build);
      } catch (error) {
        res.statusCode = 500;
        res.send(error);
      }
    })
    .listen(PORT, () => {
      console.info(`> API Server running on port ${PORT}`);
    });
};
