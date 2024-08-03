import { useState } from 'react';
import { Select } from 'antd';

function ContentTab({theme, setTheme}){
    
    return (
        <div>

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