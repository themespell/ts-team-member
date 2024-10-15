import { useState, useEffect } from 'react';
import globalSettings from '../../utils/globalSettings';
import { googleFonts } from '../../utils/googleFonts';
import { Select, Alert } from 'antd';

function TsFont({ label, targetedClass, isPro }) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value) {
      const fontName = value.split(':')[0].replace(/\+/g, ' ');
      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = ``;
      fontLink.id = 'dynamic-google-font';

      // Remove the previous font link if it exists
      const existingFontLink = document.getElementById('dynamic-google-font');
      if (existingFontLink) {
        document.head.removeChild(existingFontLink);
      }

      // Append the new font link to the head
      document.head.appendChild(fontLink);

      // Apply the selected font to the body
      document.body.style.fontFamily = fontName;
    }
  }, [value]);

  const handleChange = (selectedFont) => {
    setValue(selectedFont);
  };

  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          style={{ color: globalSettings.theme.textColor }}
        >
          {label}
        </label>
      )}
      {isPro ? (
        <Alert banner message="This feature is available for Pro users only." />
      ) : (
        <Select
          placeholder={`Select ${label}`}
          value={value}
          style={{
            width: '100%',
            fontFamily: value ? value.split(':')[0].replace(/\+/g, ' ') : undefined,
          }}
          onChange={handleChange}
          options={googleFonts}
          targetedClass={targetedClass}
        />
      )}
    </div>
  );
}

export default TsFont;