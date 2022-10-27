import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../types'

interface TaskSlice {
  tasks: Task[]
}

const initialState: TaskSlice = {
  tasks: [],
}

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [action.payload].concat(state.tasks);
    },
    toggleCompleteTask: (state, action: PayloadAction<string>) => {
      const taskToToggle = state.tasks.find(task => task.id === action.payload)

      if (!taskToToggle) return;

      taskToToggle.complete = !taskToToggle.complete;

      const newTasks = state.tasks.map(task => task.id === action.payload ? taskToToggle : task)

      state.tasks = newTasks
    }
  }
})

export const { addTask, toggleCompleteTask } = taskSlice.actions

export default taskSlice.reducer