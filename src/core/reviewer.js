import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { parseCode } from './parser.js';
import { log } from '../utils/logger.js';
import { loadConfig } from '../utils/config.js';
export async function runReview(target, options) {
  const cfg = loadConfig();
  // traverse and collect files
  // for each, parse and send prompt
  log.info('Starting review', { target });
  // ...
}
