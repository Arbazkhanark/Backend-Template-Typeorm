import { format } from 'date-fns';
import fs from 'fs';
import path from 'path';

enum LogLevel {
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARN = 'WARN',
  DEBUG = 'DEBUG'
}

interface LogMeta {
  [key: string]: any; // Flexible meta object
}

class Logger {
  private static logFilePath = 'logs/app.log';

  private static formatMessage(
    level: LogLevel,
    message: string,
    functionName?: string,
    requestId?: string,
    meta?: LogMeta
  ): string {
    const timestamp = format(new Date(), 'HH:mm:ss');
    const functionPart = functionName ? ` [${functionName}]` : '';
    const requestPart = requestId ? ` [${requestId}]` : '';
    const metaPart = meta ? ` ${JSON.stringify(meta)}` : '';
    return `[${level}] ${timestamp}${requestPart}${functionPart} ${message}${metaPart}`;
  }

  private static writeToFile(log: string) {
    try {
      // 👇 Ensure the log folder exists
      const dir = path.dirname(this.logFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // 👇 Ensure the log file exists (optional)
      if (!fs.existsSync(this.logFilePath)) {
        fs.writeFileSync(this.logFilePath, '');
      }

      // 👇 Append log line
      fs.appendFileSync(this.logFilePath, log + '\n');
    } catch (error) {
      console.error(`Failed to write log to file: ${error}`);
    }
  }

  static info(message: string, functionName?: string, requestId?: string, meta?: LogMeta) {
    const log = this.formatMessage(LogLevel.INFO, message, functionName, requestId, meta);
    console.log(log);
    this.writeToFile(log);
  }

  static error(message: string, functionName?: string, requestId?: string, meta?: LogMeta) {
    const log = this.formatMessage(LogLevel.ERROR, message, functionName, requestId, meta);
    console.error(log);
    this.writeToFile(log);
  }

  static warn(message: string, functionName?: string, requestId?: string, meta?: LogMeta) {
    const log = this.formatMessage(LogLevel.WARN, message, functionName, requestId, meta);
    console.warn(log);
    this.writeToFile(log);
  }

  static debug(message: string, functionName?: string, requestId?: string, meta?: LogMeta) {
    if (process.env.NODE_ENV !== 'production') {
      const log = this.formatMessage(LogLevel.DEBUG, message, functionName, requestId, meta);
      console.debug(log);
      this.writeToFile(log);
    }
  }
}

export default Logger;