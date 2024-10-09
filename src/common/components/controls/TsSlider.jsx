import { Slider, InputNumber } from 'antd';

import globalSettings from '../../utils/globalSettings';

function TsSlider({ label, range, value, unit, onChange }) {
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
            onChange={onChange}
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
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}

export default TsSlider;