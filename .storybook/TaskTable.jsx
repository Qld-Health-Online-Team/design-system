import React from 'react';

export const TaskTable = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>
              {task.completed}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};