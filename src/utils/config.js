import fs from 'fs';
import path from 'path';
export function loadConfig() {
  const cfgPath = path.resolve(process.cwd(), 'aireview.config.js');
  if (fs.existsSync(cfgPath)) {
    return require(cfgPath);
  }
  return {};
}
