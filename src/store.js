import { create } from 'zustand'

const useStore = create((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
    selectedAnimation: 'tsh-3d-float',
    setSelectedAnimation: (animation) => set({ selectedAnimation: animation }),
    backgroundColor: '#ffffff',
    setBackgroundColor: (color) => set({ backgroundColor: color }),
    postId: null,
    setPostId: (id) => set({ postId: id }),
}))

export default useStore;