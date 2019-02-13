import {DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {Todo, TodoList} from '../models';
import {TodoRepository} from './todo.repository';
import {DbmemoryDataSource} from '../datasources';
import {Getter, inject} from '@loopback/core';

export class TodoListRepository extends DefaultCrudRepository<
  TodoList,
  typeof TodoList.prototype.id
> {
  public readonly todos: HasManyRepositoryFactory<
      Todo,
      typeof TodoList.prototype.id
  >

  constructor(
    @inject('datasources.dbmemory') dataSource: DbmemoryDataSource,
    @repository.getter(TodoRepository)
    protected todoRepositoryGetter: Getter<TodoRepository>
  ) {
    super(TodoList, dataSource);
    this.todos = this.createHasManyRepositoryFactoryFor(
        'todos',
        todoRepositoryGetter
    )
  }
}
