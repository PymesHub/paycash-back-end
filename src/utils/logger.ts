import * as winston from 'winston';

class Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      ),
      transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({
          filename: 'logs/app.log',
          level: 'info',
        }),
      ],
    });
  }

  log(level: string, message: string): void {
    this.logger.log(level, message);
  }

  info(message: string): void {
    this.log('info', message);
  }

  error(message: string): void {
    this.log('error', message);
  }

  warn(message: string): void {
    this.log('warn', message);
  }

  debug(message: string): void {
    this.log('debug', message);
  }
}

export const logger = new Logger();
