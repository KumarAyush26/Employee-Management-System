import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap mt-10 gap-5">
      {[
        { label: 'New Task', value: data.taskCounts.newTask, color: 'from-yellow-400 to-yellow-500' },
        { label: 'Completed Task', value: data.taskCounts.completed, color: 'from-green-400 to-emerald-500' },
        { label: 'Active Task', value: data.taskCounts.active, color: 'from-blue-400 to-blue-500' },
        { label: 'Failed Task', value: data.taskCounts.failed, color: 'from-red-400 to-pink-500' }
      ].map((item, idx) => (
        <div key={idx} className={`rounded-xl flex-1 min-w-[45%] py-8 px-6 bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-2xl transition transform hover:scale-[1.03]`}>
          <h2 className="text-3xl font-semibold">{item.value}</h2>
          <h3 className="text-lg font-medium">{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
