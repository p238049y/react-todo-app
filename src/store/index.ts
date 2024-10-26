import { create } from "zustand";

type TaskState = {
  id: number;
  title: string
}

// インターフェースのようなイメージか
type State = {
  taskState: TaskState
  updateTask: (payload: TaskState) => void
  resetTask: () => void
}

const useTaskStore = create<State>((set) => ({
  taskState: {id: 0, title: ''},
  updateTask: (payload) => set({
    taskState: payload,
  }),
  resetTask: () => set({  taskState: {id: 0, title: ''} })
}))

export default useTaskStore;