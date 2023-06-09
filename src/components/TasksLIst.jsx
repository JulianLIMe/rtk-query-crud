import React from 'react'
import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from '../api/apiSlice'

const TasksLIst = () => {

  const { data: tasks, isError, isLoading, error } = useGetTasksQuery()
  const [deleteTask] = useDeleteTaskMutation()
  const [updateTask] = useUpdateTaskMutation()

  if (isLoading) return <div>Loading...</div>
  else if (isError) return <dir>Error: {error.message}</dir>


  //console.log(tasks)

  return (
    <div>
      <ul>
        {
          tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <button onClick={() => deleteTask(task.id)}>delete</button>
              <input type="checkbox" id={task.id} checked={task.completed} onChange={(e) => updateTask({ ...task, completed: e.target.checked })} />
              <label htmlFor={task.id}>completed</label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TasksLIst
