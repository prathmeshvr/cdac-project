import { NgxLoggerLevel } from 'ngx-logger';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.OFF,
  apiUrl: 'http://13.59.165.221:8000'
  // apiUrl: 'http://localhost:8000',
  // mqtt: {
	// 	server: '192.168.0.104',
	// 	protocol: "ws",
	// 	port: 9001
	// }
};