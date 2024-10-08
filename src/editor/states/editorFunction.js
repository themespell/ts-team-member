import { create } from 'zustand';
import editorStore from './editorStore';
import { updateData } from '../../common/services/updateData';
import { toastNotification } from '../../common/utils/toastNotification';

const editorFunction = create((set) => ({
    saveSettings: (key, value) => {
        const updateState = editorStore.getState().updateState;
        updateState(key, value);
    },

    updateSettings: (action) => {
        const state = editorStore.getState();
        const { postID, postType, ...restState } = state;

        const data = Object.keys(restState)
            .filter((key) => typeof restState[key] !== 'function')
            .reduce((obj, key) => {
                obj[key] = restState[key];
                return obj;
            }, {});

        if (postID) {
            updateData(action, data, postID)
                .then((response) => {
                    toastNotification('success', `Successfully Updated`, `The settings have been successfully updated.`);
                    console.log('Settings updated successfully on the server:', response);

                    // Optionally, update local state after server update
                    Object.keys(data).forEach((key) => {
                        editorStore.getState().updateState(key, data[key]);
                    });
                })
                .catch((error) => {
                    toastNotification('error', `Update Failed`, `The settings have failed to update. Error: ${error}`);
                    console.error('Failed to update settings on the server:', error);
                });
        } else {
            console.log('No postID available. Cannot update settings.');
        }
    }
}));

export default editorFunction;