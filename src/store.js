import { create } from 'zustand'

const useStore = create((set) => ({
    selectedAnimation: 'tsh-3d-float',
    setSelectedAnimation: (animation) => set({ selectedAnimation: animation }),
    backgroundColor: '#ffffff',
    setBackgroundColor: (color) => set({ backgroundColor: color }),
}))

export default useStore;