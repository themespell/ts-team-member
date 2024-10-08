import { create } from 'zustand'

const editorStore = create((set) => ({
    // Post Data
    postID: null,
    postType: null,

    // Settings Variable
    layout: 'Card',
    view: 'grid',

    updateState: (key, value) => set((state) => ({
        ...state,
        [key]: value,
    })),
}))

export default editorStore;
