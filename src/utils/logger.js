import winston from 'winston';
export const log = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});
