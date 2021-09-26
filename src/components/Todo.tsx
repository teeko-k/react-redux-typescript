import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TodoType, TodoAction } from '../reducers/todos';
import UpdateTodoForm from './UpdateTodoForm';

interface TodoProps {
  todo: TodoType;
}

interface todoContentProps {
  readonly completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { id, content, complete } = todo;
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleRemove = () => {
    dispatch<TodoAction>({ type: 'DELETE_TODO', id });
  };

  return (
    <TodoListItem>
      {update ? (
        <UpdateTodoForm
          currentContent={content}
          id={id}
          closeForm={() => {
            setUpdate(false);
          }}
        />
      ) : (
        <TodoContainer>
          <TodoContent completed={complete}>{content}</TodoContent>
          <TodoActions>
            <TodoUpdate onClick={handleUpdate}>
              <FontAwesomeIcon icon={faEdit} title="update" />
            </TodoUpdate>
            <TodoRemove onClick={handleRemove}>
              <FontAwesomeIcon icon={faTrashAlt} title="delete" />
            </TodoRemove>
          </TodoActions>
        </TodoContainer>
      )}
    </TodoListItem>
  );
};

// Styled Components

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

const TodoActions = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TodoButton = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  /* padding: 0 10px; */
  /* color: #fff; */
  cursor: pointer;
  /* font-size: 1rem; */
`;

const TodoUpdate = styled(TodoButton)`
  color: #1a6c9b;
  margin-right: 5px;
`;

const TodoRemove = styled(TodoButton)`
  color: #9b1a1a;
`;

export default Todo;
