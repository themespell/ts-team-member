import { Divider } from "antd";
import globalSettings from '../../utils/globalSettings';

function TsDivider({ value, options, onChange }) {
  return (
    <div className="mt-8 mb-4">
        <Divider
        style={{
            borderColor: globalSettings.theme.borderColor
        }}
        ></Divider>
    </div>
  );
}

export default TsDivider;