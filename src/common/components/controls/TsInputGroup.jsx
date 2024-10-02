import { InputNumber} from 'antd';

function TsInputGroup({ label, value1, value2, value3, value4, onChange }) {
  return (
    <div className="mb-4">
        {label && (
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        )}
            <div className='flex space-x-2'>
                <InputNumber defaultValue={value1} onChange={onChange} />
                <InputNumber defaultValue={value2} onChange={onChange} />
                <InputNumber defaultValue={value3} onChange={onChange} />
                <InputNumber defaultValue={value4} onChange={onChange} />
            </div>
    </div>
  );
}

export default TsInputGroup;