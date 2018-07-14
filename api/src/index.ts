import {ShminanceApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ShminanceApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new ShminanceApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
