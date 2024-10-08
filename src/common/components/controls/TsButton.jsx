import globalSettings from '../../utils/globalSettings';

function TsButton({ id, prefix, label, onClick, htmlType }) {
  return (
    <>
      <button
      id={id}
      className="tsteam-button btn btn-primary"
      onClick={onClick}
      type={htmlType}
      >{prefix} {label}</button>
    </>
  );
}

export default TsButton;