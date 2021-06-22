import {
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  statSync,
} from 'fs';
import { fetchData } from './airtable';

const CACHE_DIR = '.temp';
const DATA_FILE = 'cache.json';

const dataPath = `${CACHE_DIR}/${DATA_FILE}`;

export const updateCache = async () => {
  const data = await fetchData();

  if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR);
  }

  writeFileSync(dataPath, data);
};

export const readCache = async () => {
  if (!existsSync(dataPath)) {
    await updateCache();
  }

  return readFileSync(dataPath);
};

export const getCacheUpdatedTime = () =>
  statSync(dataPath).mtime.toLocaleString();
