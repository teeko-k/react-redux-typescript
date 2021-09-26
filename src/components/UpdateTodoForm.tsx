import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TodoAction } from '../reducers/todos';

interface UpdateTodoFormProps {
  currentContent: string;
  id: number;
  closeForm: () => void;
}

const UpdateTodoForm: React.FC<UpdateTodoFormProps> = ({
  currentContent,
  id,
  closeForm,
}) => {
  const [content, SetContent] = useState(currentContent);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    SetContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch<TodoAction>({ type: 'UPDATE_TODO', id, payload: content });
    closeForm();
  };

  return (
    <UpdateTodoFormContainer onSubmit={handleSubmit}>
      <UpdateTodoInput value={content} onChange={handleChange} />
      <UpdateTodoButton type="submit">Update</UpdateTodoButton>
    </UpdateTodoFormContainer>
  );
};

const UpdateTodoFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  width: 100%;
`;

const UpdateTodoInput = styled.input`
  border: none;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  flex: 2;
  padding: 10px 15px;
  margin-right: 10px;
`;

const UpdateTodoButton = styled.button`
  background-color: #0c4f75;
  border: none;
  border-radius: 5px;
  color: #fff;
  flex: 1;
  padding: 10px 15px;
`;

export default UpdateTodoForm;
