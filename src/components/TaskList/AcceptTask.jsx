import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-gradient-to-br from-emerald-500/30 to-emerald-700/30 backdrop-blur-xl border border-emerald-400/20 hover:scale-105 transition-transform shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-emerald-500/30 border border-emerald-300/30 text-emerald-100 text-xs px-3 py-1 rounded-full">{data.category}</h3>
        <h4 className="text-gray-300 text-xs">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="flex justify-between mt-4 gap-2">
        <button className="flex-1 bg-emerald-500/60 hover:bg-emerald-500 py-1 px-2 text-sm rounded-md text-white transition">Mark Complete</button>
        <button className="flex-1 bg-red-500/60 hover:bg-red-500 py-1 px-2 text-sm rounded-md text-white transition">Mark Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
