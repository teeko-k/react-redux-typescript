import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TodoAction } from '../reducers/todos';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTodoForm: React.FC = () => {
  const [content, SetContent] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    SetContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch<TodoAction>({ type: 'ADD_TODO', payload: content });
    SetContent('');
  };

  return (
    <AddTodoFormContainer onSubmit={handleSubmit}>
      <AddTodoInput
        type="text"
        placeholder="enter todo ..."
        value={content}
        onChange={handleChange}
      />
      <AddTodoButton type="submit">
        <FontAwesomeIcon icon={faPlus} /> &nbsp; Add
      </AddTodoButton>
    </AddTodoFormContainer>
  );
};

const AddTodoFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin: 20px auto 0;
  width: 500px;
`;

const AddTodoInput = styled.input`
  border: none;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px 15px;
  margin-right: 10px;
  flex: 5;
`;

const AddTodoButton = styled.button`
  background-color: #0c4f75;
  border: none;
  border-radius: 5px;
  color: #fff;
  flex: 1;
  padding: 10px 15px;
`;

export default AddTodoForm;
