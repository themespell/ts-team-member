import globalSettings from '../../utils/globalSettings';

function TsLoader({ label }) {
  const tsteamLogo = tsteam_settings.assets_path;
  return (
      <div
          className="flex flex-col justify-center items-center h-screen"
          style={{backgroundColor: globalSettings.theme.primaryColor}}
      >
        <img src={`${tsteamLogo}/img/tsteam_icon_white.svg`} className="tsteam__topbar-logo w-12 h-12"/>
        <label className="text-white mt-3">{label}</label>
      </div>
  );
}

export default TsLoader;