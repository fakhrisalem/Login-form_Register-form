import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Login from './components/login'; 
import RegisterForm from './components/registerform'; 
import TaskForm from './components/taskform'; 
import TaskList from './components/tasklist'; 

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('https://i.pinimg.com/564x/57/ca/08/57ca08931430829684f6db0f2be9f678.jpg'); 
    background-size: cover; 
    background-position: center; 
    margin: 10;
    font-family: Arial, sans-serif; 
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 background-color: rgba(224, 247, 250, 0.8);
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgb(255, 8, 0);
  margin: 20px auto;
  width: 90%;
  max-width: 700px; 

`;

const Title = styled.h1`
  text-align: center;
  margin: 10px 0;
`;

const Subtitle = styled.h2`
  text-align: center;
  margin: 10px 0;
`;

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Login />
      <RegisterForm />
      <Container>
        <Title></Title>
        <Subtitle>To-Do List</Subtitle>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </Container>
    </div>
  );
}

export default App;