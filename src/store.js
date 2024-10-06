import { create } from 'zustand'

const useStore = create((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}))

export default useStore;