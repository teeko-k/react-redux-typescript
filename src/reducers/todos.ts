/* eslint-disable no-var */
export interface TodoType {
  id: number;
  content: string;
  complete: boolean;
  urgent?: boolean;
}

export type TodoAction =
  | {
      type: 'ADD_TODO';
      payload: string;
    }
  | {
      type: 'DELETE_TODO';
      id: number;
    }
  | {
      type: 'UPDATE_TODO';
      payload: string;
      id: number;
    };

interface TodosReducer {
  (state: Array<TodoType>, action: TodoAction): Array<TodoType>;
}

export const todos: TodosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length++,
          content: action.payload,
          complete: false,
        },
      ];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'UPDATE_TODO':
      state.map((todo) => {
        if (todo.id === action.id) {
          todo.content = action.payload;
        }
      });
      return state;
    default:
      return state;
  }
};
