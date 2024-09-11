import { useState, useRef } from 'react';
import { Select, Button, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

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
      <label className="block text-sm font-medium text-gray-700">Select Members</label>
            <Select
          mode="multiple"
          style={{
            width: '100%',
          }}
          placeholder="select one country"
          defaultValue={['china']}
          onChange={handleChange}
          options={options}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />
        <p>Don't Have Any Member? Click here to create.</p>
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