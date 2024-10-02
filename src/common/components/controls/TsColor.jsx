import { ColorPicker } from 'antd';
import globalSettings from '../../utils/globalSettings';

function TsColor({ label, value, options, onChange }) {
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
      <ColorPicker 
      defaultValue={value} 
      onChange={onChange}
      />
    </div>
  );
}

export default TsColor;