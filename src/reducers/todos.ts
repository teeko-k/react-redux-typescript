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
    default:
      return state;
  }
};
