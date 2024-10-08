import globalSettings from '../../utils/globalSettings';
import { Spin } from 'antd';

function TsLoader({ label }) {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: globalSettings.theme.primaryColor }}
    >
      <Spin 
      fullscreen 
      tip={label}
      size="large"
      />
    </div>
  );
}

export default TsLoader;