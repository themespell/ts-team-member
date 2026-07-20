function TsButton({ id, prefix, label, onClick, htmlType, className, disabled = false }) {
    const defaultClassName = "inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed";
    const buttonClassName = className || defaultClassName;

    return (
        <button
            id={id}
            className={buttonClassName}
            onClick={onClick}
            type={htmlType}
            disabled={disabled}
        >
            {prefix} {label}
        </button>
    );
}

export default TsButton;
