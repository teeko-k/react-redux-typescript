import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { TodoType } from '../reducers/todos';
import { RootStore } from '../store';
import Todo from './Todo';

const Todos: React.FC = () => {
  const todos: Array<TodoType> = useSelector((state: RootStore) => state.todos);

  return (
    <TodosContainer>
      {todos.length !== 0 ? (
        <TodosList>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </TodosList>
      ) : (
        <Message>
          You have nothing to do, go out and enjoy the lovely weather!
        </Message>
      )}
    </TodosContainer>
  );
};

const TodosContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 20px auto 0;
  padding: 0 20px;
  width: 500px;
`;

const TodosList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Message = styled.p`
  text-align: center;
  color: #666;
`;

export default Todos;
