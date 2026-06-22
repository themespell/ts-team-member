import { ColorPicker } from "antd";
import get from 'lodash/get';
import editorStore from "../../../editor/states/editorStore";
import editorFunction from '../../../editor/states/editorFunction';
import globalSettings from '../../utils/globalSettings';

function TsColor({ label, name, onChange }) {
  const { saveSettings } = editorFunction();
  const defaultValue = get(editorStore(), name);

  const handleChange = (color) => {
    const hexColor = color.toHexString();
    if (onChange) {
      onChange(hexColor);
    } else {
      saveSettings(name, hexColor);
    }
  };

  return (
    <div className="ts-editor-field ts-editor-field--inline">
      {label && (
        <label 
        className="ts-editor-field__label"
        style={
          {
            color: globalSettings.theme.textColor,
          }
        }
        >{label}</label>
      )}
      <div className="ts-editor-field__color">
        <ColorPicker
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default TsColor;
