import { Slider, InputNumber } from 'antd';
import editorStore from '../../../editor/states/editorStore';
import editorFunction from '../../../editor/states/editorFunction';
import { get } from 'lodash';  // Importing lodash's get function

import globalSettings from '../../utils/globalSettings';

function TsSlider({ label, name, range, value, unit, onChange }) {
  
  const { saveSettings } = editorFunction();

  console.log(name)
  const dynamicValue = get(editorStore(), name); // Dynamically access the property using 'name'
  

   const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    } else {
      saveSettings(name, value);
    }
  };

  return (
    <>
    {label && (
            <div className='flex justify-between'>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <label className="block text-sm font-medium text-gray-700 mb-1 mr-1">{unit}</label>
            </div>
      )}
      <div className="mb-4 flex justify-between items-center w-full">
        <div className="w-full mr-6">
          <Slider
            value={parseInt(value)}
            min={parseInt(range.min)}
            max={parseInt(range.max)}
            onChange={handleChange}
            style={{
                track: {
                    background: '#000',
                },
                width: '100%',
            }}
          />
        </div>
        <div>
          <InputNumber
            value={parseInt(value)}
            min={parseInt(range.min)}
            max={parseInt(range.max)}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default TsSlider;