import { Command } from 'commander';
import { runReview } from '../core/reviewer.js';
export const reviewCommand = new Command('review')
  .argument('<path>', 'Path to files or directory')
  .option('-o, --output <formats...>', 'Output formats', ['terminal'])
  .action(async (path, options) => {
    await runReview(path, options);
  });
