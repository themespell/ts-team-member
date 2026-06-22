import globalSettings from '../../utils/globalSettings';
import { useEffect, useState } from 'react';

function TsLoader({ label }) {
  const tsteamLogo = tsteam_settings.assets_path;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return 90;
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
      <div
          className="ts-loader-wrapper"
          style={{backgroundColor: '#0f172a'}}
      >
        <div className="ts-loader-content">
          {/* Logo with pulse */}
          <div className="ts-loader-logo-wrapper">
            <div className="ts-loader-logo-pulse"></div>
            <img
              src={`${tsteamLogo}/img/tsteam_icon_white.svg`}
              className="ts-loader-logo"
              alt="Team Members"
            />
          </div>

          {/* Loading text */}
          <div className="ts-loader-text">
            <span className="ts-loader-label">{label}</span>
            <div className="ts-loader-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="ts-loader-progress-wrapper">
            <div className="ts-loader-progress-bar" style={{width: `${progress}%`}}></div>
          </div>

          {/* Subtitle */}
          <div className="ts-loader-subtitle">Team Members Editor</div>
        </div>

        {/* Background decoration */}
        <div className="ts-loader-bg-gradient"></div>
        <div className="ts-loader-bg-pattern"></div>
      </div>
  );
}

export default TsLoader;
