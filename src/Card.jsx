import React, { useContext } from 'react';
import { TaskContext } from './Board';

const Card = ({ card, column,handleShowModel }) => {
   
  const {columns,setColumns,setShowModel} = useContext(TaskContext)
    
  const handleOnDragStart = (e, cardId) => {
        e.dataTransfer.setData('cardId', cardId);
      }

      const handleDelete = () => {
        const updatedCards = column.cards.filter(cardItem => cardItem.id !== card.id);
        
        const updatedColumn = { ...column, cards: updatedCards };
      
        const updatedColumns = columns.map(col => (col.id === column.id ? updatedColumn : col));
      
        setColumns(updatedColumns);
      };
      

  return (
    <div onClick={handleShowModel} className='border flex gap-4 justify-between h-full px-4 py-4 rounded-md bg-white shadow-md' draggable onDragStart={(e) => handleOnDragStart(e, card.id)} key={card.id}>
        <div>
          <p className='font-semibold'>{card.title}</p>
          <p className='text-gray-400'>{card.description}</p>
        </div>
        <svg onClick={(e)=>{e.stopPropagation();handleDelete()}} class="h-9 w-9  shrink-0 text-red-500 bg-red-50 p-1 px-2 rounded-md cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
    </div>
  );
};

export default Card;
