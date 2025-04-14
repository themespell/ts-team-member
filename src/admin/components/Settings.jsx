import { useState } from 'react';
import {createData} from "../../common/services/createData.js";

function Settings() {
    const [isMigrating, setIsMigrating] = useState(false);
    const [message, setMessage] = useState('');

    const handleMigrate = async () => {
        setIsMigrating(true);
        setMessage('Migrating team members...');

        try {
            // Call the createData function to trigger the migration
            const response = await createData('tsteam/radius_team/migrate', {});

            if (response.success) {
                setMessage(response.data || 'Migration completed successfully!');
            } else {
                setMessage(response.data || 'Migration failed.');
            }
        } catch (error) {
            setMessage('An error occurred: ' + error.message);
        } finally {
            setIsMigrating(false);
        }
    };

    return (
        <div>
            <h1>Settings</h1>
            <button onClick={handleMigrate} disabled={isMigrating}>
                {isMigrating ? 'Migrating...' : 'Migrate Team Members'}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Settings;
