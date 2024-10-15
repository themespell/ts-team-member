import { Slider, InputNumber } from 'antd';
import get from 'lodash/get';
import editorStore from '../../../editor/states/editorStore';
import editorFunction from '../../../editor/states/editorFunction';

import globalSettings from '../../utils/globalSettings';

function TsSlider({ label, name, range, unit, onChange }) {
  
  const { saveSettings } = editorFunction();

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
            value={parseInt(get(editorStore(), name))}
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
            value={parseInt(get(editorStore(), name))}
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