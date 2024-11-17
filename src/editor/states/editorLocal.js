import { create } from 'zustand';
import editorHelper from "./editorHelper.js";

// States Only For use in Editor
const editorLocal = create((set) => ({
    isEditor: true,
    viewport: editorHelper.getViewport(window.innerWidth),
    setViewport: (newViewport) => set({ viewport: newViewport }),
}));

export default editorLocal;