import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos, TodoType } from './reducers/todos';
import { user } from './reducers/user';

export interface RootStore {
  todos: Array<TodoType>;
  loogedIn: boolean;
}

export const store = createStore(
  combineReducers({ todos, user }),
  composeWithDevTools()
);
