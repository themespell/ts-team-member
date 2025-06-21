import React, { useState } from 'react';
import { Tabs } from 'antd';
import {migrateTeam} from "./migrationService.js";
import {toastNotification} from "../../../../common/utils/toastNotification.js";
import TsNotice from "../../../../common/components/controls/TsNotice.jsx";

const items = [
    {
        key: '1',
        label: 'WPS Team',
        children: (
            <div>
                <TsNotice
                    heading={'Please Check!'}
                    description={'Before migration, please run it on a staging site. To check the team members of WPS team click the button (You need to active WPS Team first).'}
                    label={'WPS Team'}
                    ctalink={'edit.php?post_type=wps-team-members'}
                />
                <div className="mt-4">
                    <p className="text-sm">The following data will migrate:</p>
                    <ul className="list-disc mt-3 pl-6 text-gray-700">
                        <li>Team Members</li>
                        <li>Common Settings (Coming Soon)</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        key: '2',
        label: 'Team by Radius Theme',
        children: (
            <div>
                <TsNotice
                    heading={'Please Check!'}
                    description={'Before migration, please run it on a staging site. To check the team members of Team by Radius Theme click the button (You need to active Team by Radius Theme first).'}
                    label={'Team by Radius Theme'}
                    ctalink={'edit.php?post_type=team'}
                />
                <div className="mt-4">
                    <p className="text-sm">The following data will migrate:</p>
                    <ul className="list-disc mt-3 pl-6 text-gray-700">
                        <li>Team Members</li>
                        <li>Common Settings (Coming Soon)</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        key: '3',
        label: 'WP Team',
        children: (
            <div>
                <TsNotice
                    heading={'Please Check!'}
                    description={'Before migration, please run it on a staging site. To check the team members of WP team click the button (You need to active WP Team first).'}
                    label={'WP Team'}
                    ctalink={'edit.php?post_type=sptp_member'}
                />
                <div className="mt-4">
                    <p className="text-sm">The following data will migrate:</p>
                    <ul className="list-disc mt-3 pl-6 text-gray-700">
                        <li>Team Members</li>
                        <li>Common Settings (Coming Soon)</li>
                    </ul>
                </div>
            </div>
        ),
    },
];

function Migration() {
    const [isMigrating, setIsMigrating] = useState(false);
    const [message, setMessage] = useState('');
    const [activeTab, setActiveTab] = useState('1'); // Track the active tab

    const handleMigrate = async (pluginType) => {
        setIsMigrating(true);
        setMessage('Migrating team members...');

        try {
            const result = await migrateTeam(pluginType);
            if (!result.success) {
                toastNotification('error', `Migration Unsuccessful`, result.message);
            } else {
                toastNotification('success', `Migration Done`, result.message);
                setMessage(result.message);
            }
        } finally {
            setIsMigrating(false);
        }
    };

    const pluginTypes = {
        '1': 'wps_team_members',
        '2': 'radius_team',
        '3': 'wp_team',
    };

    return (
        <>
            <div className="tsteam__color--bg w-full shadow-4xl p-6">
                <h2 className="text-xl font-bold mb-4">Migration</h2>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={(key) => {
                        setActiveTab(key);
                    }}
                />
                <div>
                    {activeTab && (
                        <button
                            onClick={() => handleMigrate(pluginTypes[activeTab])}
                            disabled={isMigrating}
                            className="tsteam-button btn btn-primary mt-3 ml-2"
                        >
                            {isMigrating ? 'Migrating...' : `Migrate Now`}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Migration;