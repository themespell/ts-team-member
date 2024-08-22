import { useState, useRef } from 'react';
import { Select, Button } from 'antd';

function ContentTab({ theme, setTheme }) {
  // Initialize loadButton with useRef
  const loadButtonRef = useRef(null);

  // Check if window.ProComponent exists and assign loadButton
  if (window.ProComponent) {
    loadButtonRef.current = window.ProComponent.loadButton;
  }

  const loadButton = loadButtonRef.current;

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Layout</label>
        <Select value={theme} onChange={(value) => setTheme(value)} mt={2}>
          <option value="Theme One">Card</option>
          <option value="Theme Two">Profile Card</option>
        </Select>

        {/* Conditionally render the Button component */}
        {loadButton && loadButton.type === 'Button' && (
          <Button type="primary">Loaded From Pro Button</Button>
        )}
      </div>
    </div>
  );
}

export default ContentTab;