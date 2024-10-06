import globalSettings from '../../utils/globalSettings';

function TsButton({ id, prefix, label, onClick, htmlType }) {
  return (
    <>
      <button
      id={id}
      class="btn btn-primary"
      onclick={onClick}
      type={htmlType}
      >{prefix} {label}</button>
    </>
  );
}

export default TsButton;