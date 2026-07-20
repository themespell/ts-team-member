import { Input, Form } from "antd";
import TsProBadge from './TsProBadge.jsx';

function TsInput({ type, label, name, required, maxLength, disabled = false, showProBadge = false }) {
  const isPro = !!tsteam_settings.is_pro ?? null;
  const isLicenseInactive = !!window.tsTeamPro?.is_licence_inactive ?? null;
  const shouldDisable = disabled || (showProBadge && (!isPro || isLicenseInactive));

  const inputStyle = {
    borderRadius: '10px',
    padding: '8px 12px',
    fontSize: '14px',
    borderColor: '#e0e0e0',
    transition: 'all 0.2s ease',
  };

  const renderInput = () => {
    switch (type) {
      case 'password':
        return (
          <Input.Password
            style={inputStyle}
            placeholder={`Enter ${label.toLowerCase()}`}
            disabled={shouldDisable}
          />
        );
      case 'description':
        return (
          <Input.TextArea
            placeholder={`Enter ${label.toLowerCase()}`}
            showCount
            maxLength={maxLength}
            disabled={shouldDisable}
            style={{
              ...inputStyle,
              minHeight: Math.min(maxLength || 100, 120),
              resize: 'none',
            }}
          />
        );
      case 'number':
        return (
          <Input
            style={inputStyle}
            type="number"
            maxLength={maxLength}
            placeholder={`Enter ${label.toLowerCase()}`}
            disabled={shouldDisable}
          />
        );
      default:
        return (
          <Input
            style={inputStyle}
            maxLength={maxLength}
            placeholder={`Enter ${label.toLowerCase()}`}
            disabled={shouldDisable}
          />
        );
    }
  };

  return (
    <Form.Item
      label={
        <span className="text-sm font-medium text-[#333]">
          {label}
          {showProBadge && (!isPro || isLicenseInactive) && <TsProBadge />}
        </span>
      }
      name={name}
      rules={[
        {
          required: required,
          message: `Please enter ${label.toLowerCase()}!`,
        },
      ]}
      style={{ marginBottom: 12 }}
    >
      {renderInput()}
    </Form.Item>
  );
}

export default TsInput;
