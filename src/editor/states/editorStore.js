import { create } from 'zustand'

const editorStore = create((set) => ({
    // Content Tab
    layout: 'Card',
    setLayout: (selectedLayout) => set({ layout: selectedLayout }),
}))

export default editorStore;