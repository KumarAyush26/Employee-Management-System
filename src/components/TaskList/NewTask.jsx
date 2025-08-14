import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-gradient-to-br from-red-500/30 to-pink-700/30 backdrop-blur-xl border border-red-400/20 hover:scale-105 transition-transform shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500/30 border border-red-300/30 text-red-100 text-xs px-3 py-1 rounded-full">{data.category}</h3>
        <h4 className="text-gray-300 text-xs">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 py-2 text-sm rounded-md text-white transition shadow-md hover:shadow-lg">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
