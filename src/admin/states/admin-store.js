import { create } from 'zustand'

const useAdminStore = create((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeShowcaseModal: () => set({ isOpen: false }),
}))

export default useAdminStore;