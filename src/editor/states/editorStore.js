import { create } from 'zustand'

const HISTORY_LIMIT = 60;

const isHistoryKey = (key) =>
    ['updateState', 'hydrateState', 'undo', 'redo', 'clearHistory', 'undoStack', 'redoStack', 'canUndo', 'canRedo']
        .includes(key);

const cloneSnapshot = (state) => JSON.parse(JSON.stringify(
    Object.keys(state)
        .filter((key) => !isHistoryKey(key))
        .reduce((acc, key) => {
            acc[key] = state[key];
            return acc;
        }, {})
));

const deepUpdateValue = (obj, keys, value) => {
    const [firstKey, ...restKeys] = keys;

    if (restKeys.length === 0) {
        return { ...obj, [firstKey]: value };
    }

    return {
        ...obj,
        [firstKey]: deepUpdateValue(
            obj[firstKey] !== undefined ? obj[firstKey] : {},
            restKeys,
            value
        )
    };
};

const createStateFromSnapshot = (state, snapshot) => ({
    ...state,
    ...snapshot,
});

const editorStore = create((set, get) => ({
    // Post Data
    postID: null,
    postType: null,
    common: {
        range: {
            min: 0,
            max: 2500,
        },
    },
    selectedLayout: {
        label: 'Card',
        value: 'Card',
        type: 'free'
    },
    selectedView: {
        label: 'Grid',
        value: 'grid',
        type: 'free'
    },
    showcaseDetails: {
        enable: false,
        type: 'modal',
    },

    // Container Tools
    containerSettings: {
        width:{
          range: {
            min: 0,
            max: 2500,
          },
          default: {
           desktop: '1200px',
           tablet: '768px',
           mobile: '100%',
          }
        }
    },
    columnSettings: {
        column:{
          range: {
            min: 1,
            max: 12,
          },
          default: {
            desktop: 3,
            tablet:  2,
            mobile:  1,
          }
        },
        gap:{
            range: {
                min: 1,
                max: 100,
            },
            default:{
                desktop: '10px',
                tablet:  '15px',
                mobile:  '20px',
            }
        }
    },
    carouselSettings:{
        slidesToShow: {
            range: {
                min: 1,
                max: 12,
            },
            default: {
                desktop: 3,
                tablet:  2,
                mobile:  1,
            }
        },
        slidesToScroll:{
            range: {
                min: 1,
                max: 12,
            },
            default: {
                desktop: 1,
                tablet:  1,
                mobile:  1,
            }
        },
        slideSpeed:{
            range: {
                min: 100,
                max: 5000,
            },
            default: 3000
        },
        gap:{
            range: {
                min: 0,
                max: 100,
            },
            default: 20
        },
        transition: 'slide',
        infinite: true,
        repeat: true,
        centerSlide: false,
        autoPlay: true
    },
    marqueeSettings:{
        marqueeSpeed:{
            range: {
                min: 1,
                max: 1000,
            },
            default: 50
        },
        infinite: true,
        pauseOnClick: false,
        pauseOnHover: true,
        direction: "left",
        delay: 0
    },

    undoStack: [],
    redoStack: [],
    canUndo: false,
    canRedo: false,

    updateState: (key, value, options = {}) => set((state) => {
        const { recordHistory = true } = options;
        const keys = key.split('.');
        const nextState = keys.length === 1
            ? {
                ...state,
                [key]: value,
            }
            : deepUpdateValue(state, keys, value);

        if (!recordHistory) {
            return nextState;
        }

        const previousSnapshot = cloneSnapshot(state);
        const nextSnapshot = cloneSnapshot(nextState);

        if (JSON.stringify(previousSnapshot) === JSON.stringify(nextSnapshot)) {
            return nextState;
        }

        const undoStack = [...state.undoStack, previousSnapshot].slice(-HISTORY_LIMIT);

        return {
            ...nextState,
            undoStack,
            redoStack: [],
            canUndo: undoStack.length > 0,
            canRedo: false,
        };
    }),

    hydrateState: (partialState) => set((state) => ({
        ...state,
        ...partialState,
        undoStack: [],
        redoStack: [],
        canUndo: false,
        canRedo: false,
    })),

    undo: () => set((state) => {
        if (!state.undoStack.length) {
            return state;
        }

        const previousSnapshot = state.undoStack[state.undoStack.length - 1];
        const currentSnapshot = cloneSnapshot(state);
        const undoStack = state.undoStack.slice(0, -1);
        const redoStack = [...state.redoStack, currentSnapshot].slice(-HISTORY_LIMIT);

        return {
            ...createStateFromSnapshot(state, previousSnapshot),
            undoStack,
            redoStack,
            canUndo: undoStack.length > 0,
            canRedo: redoStack.length > 0,
        };
    }),

    redo: () => set((state) => {
        if (!state.redoStack.length) {
            return state;
        }

        const nextSnapshot = state.redoStack[state.redoStack.length - 1];
        const currentSnapshot = cloneSnapshot(state);
        const redoStack = state.redoStack.slice(0, -1);
        const undoStack = [...state.undoStack, currentSnapshot].slice(-HISTORY_LIMIT);

        return {
            ...createStateFromSnapshot(state, nextSnapshot),
            undoStack,
            redoStack,
            canUndo: undoStack.length > 0,
            canRedo: redoStack.length > 0,
        };
    }),

    clearHistory: () => set((state) => ({
        ...state,
        undoStack: [],
        redoStack: [],
        canUndo: false,
        canRedo: false,
    })),
}))

export default editorStore;
