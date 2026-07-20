import { useState, useEffect } from 'react';
import { Select, Form } from 'antd';
import TsProBadge from "./TsProBadge.jsx";
import editorStore from "../../../editor/states/editorStore.js";
import editorFunction from '../../../editor/states/editorFunction';

function TsSelect({ label, name, defaultValue, options, onChange, mode, output = 'value', showProBadge = false, form, rules }) {
    const { saveSettings } = editorFunction();
    const [currentValue, setCurrentValue] = useState(defaultValue);

    useEffect(() => {
        setCurrentValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (value) => {
        const selectedOption = options.find(option => option.value === value);
        if (selectedOption && selectedOption.disabled) {
            return;
        }

        setCurrentValue(value);

        if (form) {
            form.setFieldsValue({ [name]: value });
        }

        if (onChange) {
            onChange(value);
        } else {
            if (output === 'value') {
                saveSettings(name, value);
            } else if (output === 'object') {
                const result = { ...selectedOption };
                saveSettings(name, result);
            }
        }
    };

    const transformedOptions = showProBadge ? options.map(option => ({
        ...option,
        label: (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <span style={{ opacity: option.disabled ? 0.7 : 1 }}>
                    {option.label}
                </span>
                {option.type === 'pro' && option.disabled && (
                    <TsProBadge />
                )}
            </div>
        ),
        disabled: option.disabled || false
    })) : options;

    const storeValue = form ? undefined : (getFromStore(name) || currentValue);

    const selectElement = (
        <Select
            placeholder={`Select ${label?.toLowerCase() || 'option'}`}
            value={storeValue}
            style={{ width: '100%' }}
            allowClear
            onChange={handleChange}
            options={transformedOptions}
            mode={mode}
            optionFilterProp="children"
            filterOption={showProBadge ? (input, option) => {
                if (option.disabled) return false;
                const originalOption = options.find(opt => opt.value === option.value);
                return originalOption?.label?.toLowerCase().includes(input.toLowerCase());
            } : undefined}
        />
    );

    if (form) {
        return (
            <Form.Item
                label={
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#333' }}>
                        {label}
                        {showProBadge && <TsProBadge />}
                    </span>
                }
                name={name}
                rules={rules}
                initialValue={defaultValue}
                style={{ marginBottom: 12 }}
            >
                <Select
                    placeholder={`Select ${label?.toLowerCase() || 'option'}`}
                    style={{ width: '100%' }}
                    allowClear
                    options={transformedOptions}
                    mode={mode}
                    optionFilterProp="children"
                    filterOption={showProBadge ? (input, option) => {
                        if (option.disabled) return false;
                        const originalOption = options.find(opt => opt.value === option.value);
                        return originalOption?.label?.toLowerCase().includes(input.toLowerCase());
                    } : undefined}
                />
            </Form.Item>
        );
    }

    return (
        <div className="ts-editor-field">
            {label && (
                <label
                    className="ts-editor-field__label"
                    style={{ color: '#333' }}
                >{label}</label>
            )}
            <div className="ts-editor-field__control">{selectElement}</div>
        </div>
    );
}

function getFromStore(name) {
    try {
        const store = editorStore();
        const keys = name.split('.');
        let value = store;
        for (const key of keys) {
            if (value && typeof value === 'object') {
                value = value[key];
            } else {
                return undefined;
            }
        }
        return value?.value !== undefined ? value.value : value;
    } catch {
        return undefined;
    }
}

export default TsSelect;
