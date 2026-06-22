import { Switch } from "antd";
import get from 'lodash/get';
import editorStore from "../../../editor/states/editorStore";
import editorFunction from '../../../editor/states/editorFunction';
import globalSettings from '../../utils/globalSettings';

function TsSwitch({ label, name, onChange }) {
  const { saveSettings } = editorFunction();

  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    } else {
      saveSettings(name, value);
    }
  };

  const storedValue = get(editorStore(), name, false);
  const isSwitchOn = storedValue === true || storedValue === 'true';

  return (
    <div className="ts-editor-field ts-editor-field--inline">
      {label && (
        <label 
          className="ts-editor-field__label"
          style={{
            color: globalSettings.theme.textColor,
          }}
        >
          {label}
        </label>
      )}
      <div className="ts-editor-field__switch">
        <Switch
          checked={isSwitchOn}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default TsSwitch;
