import { Slider, InputNumber } from 'antd';

import globalSettings from '../../utils/globalSettings';

function TsSlider({ label, range, value, onChange }) {
  return (
    <>
    {label && (
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
      )}
      <div className="mb-4 flex justify-between items-center w-full">
        <div className="w-full mr-6">
          <Slider
            value={value}
            min={range.min}
            max={range.max}
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
            value={value}
            min={range.min}
            max={range.max}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}

export default TsSlider;