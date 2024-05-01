import React from 'react';
import Card from './Card';

function Column({ column, columns, setColumns, showModel,setCard, setShowModel, setselectedColumn }) {
    
    const handleOnDrop = (e) => {
        const cardId = e.dataTransfer.getData("cardId");
        const updatedColumns = [...columns];

        const draggedCardIndex = updatedColumns.findIndex(column => column.cards.find(card => card.id === parseInt(cardId)));
        const draggedCard = updatedColumns[draggedCardIndex].cards.find(card => card.id === parseInt(cardId));

        updatedColumns[draggedCardIndex].cards = updatedColumns[draggedCardIndex].cards.filter(card => card.id !== parseInt(cardId));

        updatedColumns[column.id - 1].cards.push(draggedCard);

        setColumns(updatedColumns);
        e.preventDefault();
    };

    return (
        <div className='bg-gray-100   w-full relative rounded-md h-fit max-h-[450px] overflow-y-auto' key={column.id} onDrop={(e) => handleOnDrop(e)} onDragOver={(e) => e.preventDefault()}>
            <p className=' font-semibold text-lg  sticky top-0 left-0  p-4 pl-5 bg-gray-100  rounded-md'>{column.title}</p>
            <div className='flex flex-col gap-3 p-4'>
                {column.cards.length > 0 &&
                    <div key={column.id} className='flex flex-col gap-3'>
                        {column.cards.map((card) => {
                            return (
                                <Card handleShowModel={()=>{setShowModel(true);setselectedColumn(column);setCard(card)}} key={card.id} card={card} column={column} />
                            )
                        })}
                    </div>
                }
                <div onClick={() => {
                    setShowModel(true);
                    setselectedColumn(column);
                    setCard(null)
                }} className='h-14 border border-dashed cursor-pointer text-gray-400 flex px-4 items-center justify-between border-gray-400 rounded-md'>
                    <p className='font-medium'>Add new task</p>
                    <svg class="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </div>

            {/* Modal for adding new task */}
            {/* {showModel && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded-md shadow-lg">
                        <p className="text-xl font-semibold mb-2">Add New Task</p>
                        <input type="text" className="border rounded-md px-3 py-2 mb-2" placeholder="Task Title" />
                        <textarea className="border rounded-md px-3 py-2 mb-2" placeholder="Task Description"></textarea>
                        <button onClick={handleAddNewTask} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Task</button>
                        <button onClick={() => setShowModel(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-400">Cancel</button>
                    </div>
                </div>
            )} */}

        </div>
    );
}

export default Column;
