// export const logger = {
//     info: (message: string) => console.log(`[INFO] ${message}`),
//     error: (message: string) => console.error(`[ERROR] ${message}`)
//   };







// import { format } from 'date-fns';

// enum LogLevel {
//   INFO = 'INFO',
//   ERROR = 'ERROR',
//   WARN = 'WARN',
//   DEBUG = 'DEBUG'
// }

// class logger {
//   private static formatMessage(
//     level: LogLevel,
//     message: string,
//     functionName?: string
//   ): string {
//     const timestamp = format(new Date(), 'HH:mm:ss');
//     const functionPart = functionName ? ` [${functionName}]` : '';
//     return `[${level}] ${timestamp}${functionPart} ${message}`;
//   }

//   static info(message: string, functionName?: string) {
//     console.log(this.formatMessage(LogLevel.INFO, message, functionName));
//   }

//   static error(message: string, functionName?: string) {
//     console.error(this.formatMessage(LogLevel.ERROR, message, functionName));
//   }

//   static warn(message: string, functionName?: string) {
//     console.warn(this.formatMessage(LogLevel.WARN, message, functionName));
//   }

//   static debug(message: string, functionName?: string) {
//     if (process.env.NODE_ENV !== 'production') {
//       console.debug(this.formatMessage(LogLevel.DEBUG, message, functionName));
//     }
//   }
// }

// export default logger;













// import { format } from 'date-fns';

// enum LogLevel {
//   INFO = 'INFO',
//   ERROR = 'ERROR',
//   WARN = 'WARN',
//   DEBUG = 'DEBUG'
// }

// class logger {
//   private static formatMessage(
//     level: LogLevel,
//     message: string,
//     functionName?: string,
//     requestId?: string
//   ): string {
//     const timestamp = format(new Date(), 'HH:mm:ss');
//     const functionPart = functionName ? ` [${functionName}]` : '';
//     const requestPart = requestId ? ` [${requestId}]` : '';
//     return `[${level}] ${timestamp}${requestPart}${functionPart} ${message}`;
//   }

//   static info(message: string, functionName?: string, requestId?: string) {
//     console.log(this.formatMessage(LogLevel.INFO, message, functionName, requestId));
//   }

//   static error(message: string, functionName?: string, requestId?: string) {
//     console.error(this.formatMessage(LogLevel.ERROR, message, functionName, requestId));
//   }

//   static warn(message: string, functionName?: string, requestId?: string) {
//     console.warn(this.formatMessage(LogLevel.WARN, message, functionName, requestId));
//   }

//   static debug(message: string, functionName?: string, requestId?: string) {
//     if (process.env.NODE_ENV !== 'production') {
//       console.debug(this.formatMessage(LogLevel.DEBUG, message, functionName, requestId));
//     }
//   }
// }

// export default logger;






























// import { format } from 'date-fns';
// import fs from 'fs';
// import path from 'path';

// enum LogLevel {
//   INFO = 'INFO',
//   ERROR = 'ERROR',
//   WARN = 'WARN',
//   DEBUG = 'DEBUG'
// }

// interface LogMeta {
//   [key: string]: any;
// }

// class Logger {
//   private static logDir = 'logs';
//   private static logFilePath = path.join(this.logDir, 'app.log');

//   private static ensureLogDirectoryExists() {
//     if (!fs.existsSync(this.logDir)) {
//       fs.mkdirSync(this.logDir);
//     }
//   }

//   private static formatMessage(
//     level: LogLevel,
//     message: string,
//     functionName?: string,
//     requestId?: string,
//     meta?: LogMeta
//   ): string {
//     const timestamp = format(new Date(), 'HH:mm:ss');
//     const functionPart = functionName ? ` [${functionName}]` : '';
//     const requestPart = requestId ? ` [${requestId}]` : '';
//     const metaPart = meta ? ` ${JSON.stringify(meta)}` : '';
//     return `[${level}] ${timestamp}${requestPart}${functionPart} ${message}${metaPart}`;
//   }

//   private static writeToFile(log: string) {
//     try {
//       this.ensureLogDirectoryExists(); // Ensure folder exists
//       fs.appendFileSync(this.logFilePath, log + '\n');
//     } catch (error: any) {
//       console.error(`Failed to write log to file: ${error.message}`);
//     }
//   }

//   static info(message: string, functionName?: string, requestId?: string, meta?: LogMeta) {
//     const log = this.formatMessage(LogLevel.INFO, message, functionName, requestId, meta);
//     console.log(log);
//     this.writeToFile(log);
//   }

//   static error(message: string, functionName?: string, requestId?: string, meta?: LogMeta) {
//     const log = this.formatMessage(LogLevel.ERROR, message, functionName, requestId, meta);
//     console.error(log);
//     this.writeToFile(log);
//   }

//   static warn(message: string, functionName?: string, requestId?: string, meta?: LogMeta) {
//     const log = this.formatMessage(LogLevel.WARN, message, functionName, requestId, meta);
//     console.warn(log);
//     this.writeToFile(log);
//   }

//   static debug(message: string, functionName?: string, requestId?: string, meta?: LogMeta) {
//     if (process.env.NODE_ENV !== 'production') {
//       const log = this.formatMessage(LogLevel.DEBUG, message, functionName, requestId, meta);
//       console.debug(log);
//       this.writeToFile(log);
//     }
//   }
// }

// export default Logger;













import { format } from 'date-fns';
import fs from 'fs';

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