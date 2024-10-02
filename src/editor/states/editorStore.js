import { create } from 'zustand'

const editorStore = create((set) => ({
    // Variables
    layout: 'Card',

    // Functions
    setLayout: (selectedLayout) => set({ layout: selectedLayout }),
}))

export default editorStore;