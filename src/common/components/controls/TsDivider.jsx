import { Divider } from "antd";
import globalSettings from '../../utils/globalSettings';

function TsDivider({ label }) {
  return (
    <div className="ts-editor-divider">
        <Divider
        className="ts-editor-divider__line"
        style={{
            borderColor: globalSettings.theme.borderColor,
            margin: '0px'
        }}
        >{label}</Divider>
    </div>
  );
}

export default TsDivider;
