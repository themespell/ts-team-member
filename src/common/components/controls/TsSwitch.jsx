import { Switch } from "antd";
import globalSettings from '../../utils/globalSettings';

function TsSwitch({ label, value, onChange }) {
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
      <Switch
      value={value === 'true' || value === true}
      onChange={onChange} />
    </div>
  );
}

export default TsSwitch;