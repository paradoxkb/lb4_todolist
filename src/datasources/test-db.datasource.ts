import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './test-db.datasource.json';

export class Test_dbDataSource extends juggler.DataSource {
  static dataSourceName = 'test_db';

  constructor(
    @inject('datasources.config.test_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
