import { Select} from 'antd';
import get from 'lodash/get';
import globalSettings from '../../utils/globalSettings';

function TsSelect({ label, value, options, onChange, mode }) {
  return (
    <div className="mb-4">
      {label && (
        <label 
        className="block text-sm font-medium text-gray-700 mb-2"
        style={
          {
            color: globalSettings.theme.textColor,
          }
        }
        >{label}</label>
      )}
      <Select
        placeholder={`Select ${label}`}
        value={value}
        style={{ 
          width: '100%',
        }}
        onChange={onChange}
        options={options}
        mode={mode}
      />
    </div>
  );
}

export default TsSelect;