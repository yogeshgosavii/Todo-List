import React, { useContext, useState } from 'react';
import { TaskContext } from './Board';

function Model({showModel,setShowModel,selectedColumn,setselectedColumn,card}) {
    const {columns,setColumns}  = useContext(TaskContext)
    const [title, settitle] = useState(card?.title);
    const [description, setdescription] = useState(card?.description);

    const handleAddTask = ()=>{
       
        const updatedCards = selectedColumn.cards.filter((cardItem) => cardItem.id !== card?.id);
        const updatedColumn = {...selectedColumn ,cards : [...updatedCards,{"id" : Date.now(),"title" : title,"description" : description}]}
        const updatedColumns = columns.map((column)=> (column.id == selectedColumn.id)?updatedColumn:column)
        setColumns(updatedColumns)
       
        setShowModel(false)
    }
  return (
    <>
      {showModel && (
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='absolute top-0 left-0 w-full h-full  bg-black opacity-20' onClick={()=>{setShowModel(false)}}></div>
            <div className='absolute border rounded-md p-5 flex flex-col max-h-96 w-full max-w-sm gap-4 bg-gray-100'>
                <p className='text-xl font-semibold'>Add new task</p>
                <div className='flex gap-2'>
                <input defaultValue={card?.title} onChange={(e)=>{settitle(e.target.value)}} className='outline-none border w-full bg-white px-4 py-3 rounded-md focus:border-blue-500' placeholder='Enter task title'/>
                <select onChange={(e)=>{setselectedColumn(columns.find(columnItem => columnItem.title ==e.target.value))}} defaultValue={selectedColumn.title} className='outline-none border w-full px-4 py-3 rounded-md focus:border-blue-500'>
                    {
                        columns.map((column)=>(
                            <option key={column.id}>{column.title}</option>
                        ))
                    }
                </select>
                </div>
                <textarea defaultValue={card?.description} onChange={(e)=>{setdescription(e.target.value)}} className='outline-none border min-h-14 bg-white px-4 py-3 rounded-md focus:border-blue-500' placeholder='Enter task description'/>
                <button onClick={()=>{handleAddTask()}} className='bg-blue-500 w-full px-4 py-3 text-white rounded-md font-semibold text-lg '>Add</button>
            </div>
        </div>
      )}
    </>
  );
}

export default Model;
