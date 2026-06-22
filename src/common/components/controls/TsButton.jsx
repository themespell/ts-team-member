import globalSettings from '../../utils/globalSettings';

function TsButton({ id, prefix, label, onClick, htmlType, className, disabled = false }) {
    const defaultClassName = "tsteam-button btn btn-primary";
    const buttonClassName = className ? `${className}` : defaultClassName;

    return (
        <>
            <button
                id={id}
                className={`${buttonClassName} btn ts-editor-button`}
                onClick={onClick}
                type={htmlType}
                disabled={disabled}
            >
                {prefix} {label}
            </button>
        </>
    );
}

export default TsButton;
