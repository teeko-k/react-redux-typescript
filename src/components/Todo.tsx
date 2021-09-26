import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TodoType, TodoAction } from '../reducers/todos';

interface TodoProps {
  todo: TodoType;
}

interface todoContentProps {
  readonly completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { id, content, complete } = todo;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch<TodoAction>({ type: 'DELETE_TODO', id });
  };

  return (
    <TodoListItem>
      <TodoContainer>
        <TodoContent completed={complete}>{content}</TodoContent>
        <TodoRemove onClick={handleRemove}>delete</TodoRemove>
      </TodoContainer>
    </TodoListItem>
  );
};

const TodoListItem = styled.li`
  border-bottom: 1px solid #e0e0e0;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TodoContent = styled.p<todoContentProps>`
  color: ${(props) => (props.completed ? '#1a941a' : '#333')};
`;

const TodoRemove = styled.button`
  background-color: #9b1a1a;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
  font-size: 0.75rem;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default Todo;
