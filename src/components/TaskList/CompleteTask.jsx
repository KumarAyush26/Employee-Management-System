import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-700/30 backdrop-blur-xl border border-blue-400/20 hover:scale-105 transition-transform shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-500/30 border border-blue-300/30 text-blue-100 text-xs px-3 py-1 rounded-full">{data.category}</h3>
        <h4 className="text-gray-300 text-xs">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="mt-2">
        <button className="w-full bg-blue-500/60 text-white py-2 rounded-md cursor-default">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
