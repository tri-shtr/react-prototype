/*
https://zenn.dev/h_tatsuru/articles/f7ad45263fe181
*/
import { create } from 'zustand'

type Store = {
  count: number;
  updateTime: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

let useCounterStore = create<Store>((set, get) => ({
    count: 0,
    updateTime: 0,
    increment: () => set((state) => ({
      count: state.count + 1,
      updateTime: new Date().getTime()
    })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => {
      if(get().count !== 0) {
        set({ count: 0 })
      }
    }
  }))

  export default useCounterStore;