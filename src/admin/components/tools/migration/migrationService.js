import {createData} from "../../../../common/services/createData.js";

export const migrateTeam = async (pluginType) => {
    try {
        const endpoint = `tsteam/${pluginType}/migrate`;
        const response = await createData(endpoint, {});

        if (response.success) {
            return { success: true, message: response.data || 'Migration completed successfully!' };
        } else {
            return { success: false, message: response.data || 'Migration failed.' };
        }
    } catch (error) {
        return { success: false, message: `An error occurred: ${error.message}` };
    }
};