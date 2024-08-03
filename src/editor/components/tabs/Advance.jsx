import { useState } from 'react';
import { Slider, InputNumber, Collapse } from "antd";

function AdvanceTab(){
    const [gapVertical, setGapVertical] = useState(30);

    const onChange = (value) => {
        console.log('changed', value);
      };

      const items = [
        {
          key: '1',
          label: 'Margin & Padding',
          children: <Slider defaultValue={30} />,
        },
      ];
    
    return (
        <div>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gap Vertical</label>
                <Slider defaultValue={30} />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-4">Padding</label>
                    <div className='flex'>
                        <InputNumber min={1} max={10} defaultValue={3} controlWidth={10} onChange={onChange} />
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                    </div>
            </div>

            <Collapse accordion items={items} />

        </div>
    );
}

export default AdvanceTab;