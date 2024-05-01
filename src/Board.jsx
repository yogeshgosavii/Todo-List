import React, { createContext, useState } from 'react';
import Column from './Column';
import Card from './Card';
import Model from './Model';

// Declare TaskContext outside of the Board component
const TaskContext = createContext();

const Board = () => {
  const [columns, setColumns] = useState([
    { 
      id: 1, 
      title: 'To Do', 
      cards: [
        { id: 1736, title: 'Complete research for project proposal', description: 'Research relevant topics and gather necessary information' },
        { id: 1737, title: 'Prepare presentation slides for team meeting', description: 'Create slides outlining key points and findings' }
      ] 
    },
    { 
      id: 2, 
      title: 'In Progress', 
      cards: [
        { id: 3638, title: 'Write code for feature A', description: 'Implement feature A according to specifications' },
        { id: 3639, title: 'Review and refactor existing codebase', description: 'Identify areas for improvement and optimize code' }
      ] 
    },
    { 
      id: 3, 
      title: 'Done', 
      cards: [
        { id: 6363, title: 'Test application for bugs', description: 'Perform comprehensive testing to identify and fix any bugs' },
        { id: 6364, title: 'Deploy application to production server', description: 'Release application updates to live environment' }
      ] 
    }
  ]);
  

  const [showModel, setShowModel] = useState(false);
  const [card, setcard] = useState(null);
  const [selectedColumn, setselectedColumn] = useState();
  return (
    <TaskContext.Provider value={{ columns, setColumns ,setShowModel}}>
      <div className='flex flex-col px-10 sm:flex-row gap-10 w-full max-w-screen-lg mt-10'>
        {columns.map((column) => (
          <Column key={column.id} showModel={showModel} setCard = {setcard} setselectedColumn={setselectedColumn} setShowModel={setShowModel} column={column} columns={columns} setColumns={setColumns}/>
        ))}
        {showModel && 
          <Model setselectedColumn={setselectedColumn} selectedColumn={selectedColumn} card={card} setShowModel={setShowModel} columns={columns} showModel={showModel} />
        }
      </div>
    </TaskContext.Provider>
  );
};

export default Board;

export { TaskContext };
