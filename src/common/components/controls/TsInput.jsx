import globalSettings from '../../utils/globalSettings';
import { Input, Form } from "antd";
import TsProBadge from './TsProBadge.jsx';

function TsInput({ type, label, name, required, maxLength, disabled = false, showProBadge = false }) {
  const isPro = !!tsteam_settings.is_pro ?? null;
  const isLicenseInactive = !!window.tsTeamPro?.is_licence_inactive ?? null;
  const shouldDisable = disabled || (showProBadge && (!isPro || isLicenseInactive));

  const renderInput = () => {
    switch (type) {
      case 'password':
        return <Input.Password 
        style={{
          borderColor: globalSettings.components.Input.colorBorder,
          borderRadius: `${globalSettings.components.Input.borderRadius}px`,
          padding: `${globalSettings.components.Input.paddingBlock}px`,
        }}
        placeholder={`Enter ${label.toLowerCase()}`}
        disabled={shouldDisable} />;
      case 'description':
        return (
          <Input.TextArea
            placeholder={`Enter ${label.toLowerCase()}`}
            showCount
            maxLength={maxLength}
            disabled={shouldDisable}
            style={{
              height: maxLength,
              resize: 'none',
              borderColor: globalSettings.components.Input.colorBorder,
              padding: `${globalSettings.components.Input.paddingBlock}px`,
            }}
          />
        );
      case 'number':
        return <Input
        style={{
          borderColor: globalSettings.components.Input.colorBorder,
          borderRadius: `${globalSettings.components.Input.borderRadius}px`,
          padding: `${globalSettings.components.Input.paddingBlock}px`,
        }}
        type="number" maxLength={maxLength} placeholder={`Enter ${label.toLowerCase()}`} disabled={shouldDisable} />;
      default:
        return <Input
        style={{
          borderColor: globalSettings.components.Input.colorBorder,
          borderRadius: `${globalSettings.components.Input.borderRadius}px`,
          padding: `${globalSettings.components.Input.paddingBlock}px`,
        }}
        maxLength={maxLength} placeholder={`Enter ${label.toLowerCase()}`} disabled={shouldDisable} />;
    }
  };

  return (
    <>
      <Form.Item
        label={
          <>
            {label}
            {showProBadge && (!isPro || isLicenseInactive) && <TsProBadge />}
          </>
        }
        name={name}
        rules={[
          {
            required: required,
            message: `Please enter ${label.toLowerCase()}!`
          },
        ]}
      >
        {renderInput()}
      </Form.Item>
    </>
  );
}

export default TsInput;