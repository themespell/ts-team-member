import { create } from 'zustand'

const editorStore = create((set) => ({
    // Variables
    layout: 'Card',
    view: 'grid',

    // Functions
    setLayout: (selectedLayout) => set({ layout: selectedLayout }),
    setView: (selectedView) => set({ view: selectedView }),
}))

export default editorStore;