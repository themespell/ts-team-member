import { create } from 'zustand'

const editorStore = create((set) => ({
    // Post Data
    postID: null,
    postType: null,

    // Layouts Settings
    // layout: 'Card',
    // view: 'grid',
    selectedLayout: {
        name: 'card',
        type: 'free'
    },
    selectedView: {
        name: 'grid',
        type: 'free'
    },

    // Container Settings
    containerSettings: {
        width:{
          range: {
            min: 0,
            max: 2500,
          },
          default: 100
        }
    },
    columnSettings: {
        column:{
          range: {
            min: 1,
            max: 12,
          },
          default: 3
        },
        gap:{
            range: {
                min: 1,
                max: 100,
            },
            default: 10
        }
    },
    carouselSettings:{
        slidesToShow: {
            range: {
                min: 1,
                max: 12,
            },
            default: 3
        },
        slidesToScroll:{
            range: {
                min: 1,
                max: 12,
            },
            default: 1
        },
        draggable: true,
        centerSlide: true,
        autoPlay: true
    },
    cardStyle: {
        color: {
            backgroundColor: '000',
            textColor: '000',
            borderColor: '000',
            hoverColor: '000',
            hoverTextColor: '000',
            hoverBorderColor: '000'
        }
    },

    // Card Settings
    cardWidth: '100%',
    cardHeight: 'auto',
    cardBackground: '#ffffff',
    cardBorderRadius: '0.5rem',
    cardBorder: '1px solid #e0e0e0',
    cardShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cardMargin: '0 auto',
    cardPadding: '0.5rem',

    // Card Image Settings
    cardImageWidth: '100%',

    updateState: (key, value) => set((state) => {
        const keys = key.split('.');
        if (keys.length === 1) {
            return {
                ...state,
                [key]: value,
            };
        }
        const deepUpdate = (obj, keys) => {
            const [firstKey, ...restKeys] = keys;
            if (restKeys.length === 0) {
                return { ...obj, [firstKey]: value };
            }
            
            return {
                ...obj,
                [firstKey]: deepUpdate(obj[firstKey] !== undefined ? obj[firstKey] : {}, restKeys)
            };
        };
        return deepUpdate(state, keys);
    }),
}))

export default editorStore;
