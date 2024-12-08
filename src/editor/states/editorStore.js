import { create } from 'zustand'

const editorStore = create((set) => ({
    // Post Data
    postID: null,
    postType: null,

    selectedLayout: {
        label: 'Card',
        value: 'Card',
        type: 'free'
    },
    selectedView: {
        label: 'Static / Grid',
        value: 'grid',
        type: 'free'
    },
    showcaseDetails: {
        enable: true,
        type: 'modal',
        button: {
            text: 'Button Text',
        }
    },

    // Container Settings
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
        draggable: true,
        centerSlide: true,
        autoPlay: true
    },

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
