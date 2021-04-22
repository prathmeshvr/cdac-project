import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR,
  apiUrl: 'http://localhost:8000'
};
