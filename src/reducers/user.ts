interface UserAction {
  type: 'LOG_IN' | 'LOG_OUT';
  id: number;
}

interface UserReducer {
  (state: boolean, action: UserAction): boolean;
}

export const user: UserReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return true;
    case 'LOG_OUT':
      return false;
    default:
      return state;
  }
};
