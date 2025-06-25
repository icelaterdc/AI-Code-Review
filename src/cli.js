#!/usr/bin/env node
import { program } from 'commander';
import dotenv from 'dotenv';
import { reviewCommand, initCommand, pluginCommand } from './commands/index.js';

dotenv.config();

program
  .name('ai-review-pro')
  .version('2.0.0')
  .description('Extensible AI-powered code review');

program.addCommand(reviewCommand);
program.addCommand(initCommand);
program.addCommand(pluginCommand);

program.parse(process.argv);
