import { Switch } from "antd";
import editorFunction from '../../../editor/states/editorFunction';
import globalSettings from '../../utils/globalSettings';

function TsSwitch({ label, name, value, onChange }) {
  const { saveSettings } = editorFunction();

  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    } else {
      saveSettings(name, value ? 'true' : 'false')
    }
  };

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
      onChange={handleChange} />
    </div>
  );
}

export default TsSwitch;