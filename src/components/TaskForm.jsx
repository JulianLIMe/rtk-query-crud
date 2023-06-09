import React from 'react'
import { useCreateTaskMutation } from '../api/apiSlice'

const TaskForm = () => {

    const [createTask] = useCreateTaskMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log('submited', e.target.elements)
        const name = e.target.elements[0].value
        const description = e.target.elements[1].value
        const completed = e.target.elements[2].checked

        console.log(name, description, completed)

        createTask({name, description, completed})

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' style={{ border: '3px solid' }} />
            <input type="text" name='description' style={{ border: '3px solid' }} />
            <input type="checkbox" name='completed' style={{ border: '3px solid' }} />
            <button>Add Task</button>
        </form>
    )
}

export default TaskForm
