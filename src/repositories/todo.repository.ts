import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Todo} from '../models';
import {DbmemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id
> {
  constructor(
    @inject('datasources.dbmemory') dataSource: DbmemoryDataSource,
  ) {
    super(Todo, dataSource);
  }
}
