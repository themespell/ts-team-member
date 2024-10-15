import { Divider } from "antd";
import globalSettings from '../../utils/globalSettings';

function TsDivider({ label }) {
  return (
    <div className="mt-8 mb-4">
        <Divider
        style={{
            borderColor: globalSettings.theme.borderColor
        }}
        >{label}</Divider>
    </div>
  );
}

export default TsDivider;