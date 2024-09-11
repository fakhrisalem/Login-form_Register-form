import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e0f7fa; 
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
`;

const TaskText = styled.span`
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
  flex: 1;
  text-align: center; 
`;

const Button = styled.button`
  margin-left: 100px;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:first-child {
    background-color: #4f5100; 
    color: white;
  }

  &:last-child {
    background-color: #4f5100; 
    color: white;
  }

  &:hover {
    opacity: 0.8; 
  }
`;

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <TaskContainer>
      <TaskText done={task.done}>{task.text}</TaskText>
      <Button onClick={() => onToggle(task.id)}>Mark as {task.done ? 'Undone' : 'Done'}</Button>
      <Button onClick={() => onDelete(task.id)}>Delete</Button>
    </TaskContainer>
  );
};

export default Task;