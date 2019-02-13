import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './dbmemory.datasource.json';

export class DbmemoryDataSource extends juggler.DataSource {
  static dataSourceName = 'dbmemory';

  constructor(
    @inject('datasources.config.dbmemory', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
