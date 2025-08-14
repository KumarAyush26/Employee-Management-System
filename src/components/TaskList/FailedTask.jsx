import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-700/30 backdrop-blur-xl border border-violet-400/20 hover:scale-105 transition-transform shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-violet-500/30 border border-violet-300/30 text-violet-100 text-xs px-3 py-1 rounded-full">{data.category}</h3>
        <h4 className="text-gray-300 text-xs">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="mt-2">
        <button className="w-full bg-violet-500/60 text-white py-2 rounded-md cursor-default">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
