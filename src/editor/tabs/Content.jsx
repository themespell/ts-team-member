import { useState } from 'react';
import { Select } from '@chakra-ui/react';

function ContentTab({theme, setTheme}){
    const [displayType, setDisplayType] = useState('Grid');
    
    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Display Type</label>
                <Select value={displayType} onChange={(e) => setDisplayType(e.target.value)} mt={2}>
                <option value="Grid">Grid</option>
                <option value="List">List</option>
                </Select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Layout</label>
                <Select value={theme} onChange={(e) => setTheme(e.target.value)} mt={2}>
                <option value="Theme One">Card</option>
                <option value="Theme Two">Profile Card</option>
                </Select>
          </div>
        </div>
    );
}

export default ContentTab;