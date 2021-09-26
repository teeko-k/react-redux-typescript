import React from 'react';
import AddTodoForm from './components/AddTodoFrom';
import Todos from './components/Todos';

import GlobalStyles from './GlobalStyles';

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <AddTodoForm />
      <Todos />
    </>
  );
}
