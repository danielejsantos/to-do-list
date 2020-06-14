import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(56,152,128);
  background: linear-gradient(180deg, rgba(55,152,128,1) 0%, rgba(106,212,189,1) 50%, rgba(168,238,219,1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-size: 36px;
  text-align: center;
  color: #fff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 500;
  margin-top: 0;
  padding-top: 20px;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  
  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0px 3px rgba(0, 0, 0, 0.1);
  color: #313131;
  font-size: 20px;
  margin-right: 15px;

  :focus, :hover{
    background-color: rgba(255, 255, 255, 0.75);
    transition: 0.5s;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
    margin-bottom: 10px;
    margin-right: 0;
  }
`;

const Button = styled.button`
  width: 70px;
  border: none;
  color: white;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  background-color: #22745f;
  border-radius: 5px;

  :hover{
    background-color: #1a5849;
    transition: 0.75s;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 30px;
  }
`;

const List = styled.div`
  width: 485px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 15px;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 100%;
    margin-bottom: 35px;
  }
`;

const ListItem = styled.li`
  font-size: 20px;
  color: #555555;
  padding-left: 15px;
  list-style: none;
  text-decoration: ${({ isCompleted }) => isCompleted ? "line-through" : "none"};
`;

const ItemWrapper = styled.div`
  border-bottom: 2px solid #629083;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 5px 0 5px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const CloseButton = styled.button`
  border: none;
  color: white;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  background-color: #22745f;
  border-radius: 5px;
  margin-right: 10px;
  width: 25px;

  :hover{
    background-color: #1a5849;
    transition: 0.75s;
  }
`;

const App = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (item) => {
    if (item === '') return null;
    setList([...list, { item, completed: false }])
    setItem('')
  };

  const handleCompleted = index => {
    const newList = [...list];
    newList[index].completed = !newList[index].completed;
    setList(newList);
  }

  const handleRemove = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <Container>
      <StyledTitle>To Do List</StyledTitle>
      <Wrapper>
        <Input value={item} onChange={(e => { setItem(e.target.value) })} />
        <Button onClick={() => handleSubmit(item)}>Add</Button>
      </Wrapper>
      <List>
        {list.map((listItem, index) =>
          <ItemWrapper>
            <div onClick={() => handleCompleted(index)}><ListItem isCompleted={listItem.completed}>{listItem.item}</ListItem></div>
            <CloseButton onClick={() => handleRemove(index)}>x</CloseButton>
          </ItemWrapper>)}
      </List>
    </Container>
  )
};

export default App;