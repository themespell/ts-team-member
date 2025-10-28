import { useState, useEffect } from 'react';
import { Select, Form } from 'antd';
import get from 'lodash/get';
import editorStore from "../../../editor/states/editorStore.js";
import editorFunction from '../../../editor/states/editorFunction';
import globalSettings from '../../utils/globalSettings';
import TsProBadge from "./TsProBadge.jsx";

function TsSelect({ label, name, defaultValue, options, onChange, mode, output = 'value', showProBadge = false, form, rules }) {
    const { saveSettings } = editorFunction();
    const [currentValue, setCurrentValue] = useState(defaultValue);

    useEffect(() => {
        setCurrentValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (value) => {
        // Check if the selected option is disabled
        const selectedOption = options.find(option => option.value === value);
        if (selectedOption && selectedOption.disabled) {
            return; // Prevent selection of disabled options
        }

        setCurrentValue(value);

        // If form is provided, update form field
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

    // Transform options only if showProBadge is true and options have the required properties
    const transformedOptions = showProBadge ? options.map(option => ({
        ...option,
        label: (
            <div className="flex items-center justify-between w-full">
                <span className={option.disabled ? "opacity-70 cursor-not-allowed" : ""}>
                    {option.label}
                </span>
                {option.type === 'pro' && option.disabled && (
                    <TsProBadge />
                )}
            </div>
        ),
        disabled: option.disabled || false
    })) : options;

    const selectElement = (
        <Select
            placeholder={`Select ${label}`}
            value={form ? undefined : (get(editorStore(), name) || currentValue)}
            activeBorderColor="linear-gradient(45deg, #7A5AF8, #7140D9, #950CED, #F46174)"
            activeOutlineColor="linear-gradient(45deg, #7A5AF8, #7140D9, #950CED, #F46174)"
            hoverBorderColor="linear-gradient(45deg, #7A5AF8, #7140D9, #950CED, #F46174)"
            style={{
                width: '100%',
            }}
            onChange={handleChange}
            options={transformedOptions}
            mode={mode}
            optionFilterProp="children"
            filterOption={showProBadge ? (input, option) => {
                // Only allow filtering on non-disabled options
                if (option.disabled) return false;
                const originalOption = options.find(opt => opt.value === option.value);
                return originalOption?.label?.toLowerCase().includes(input.toLowerCase());
            } : undefined}
        />
    );

    // If form is provided, wrap in Form.Item
    if (form) {
        return (
            <Form.Item
                label={label}
                name={name}
                rules={rules}
                style={{ marginBottom: 16 }}
            >
                {selectElement}
            </Form.Item>
        );
    }

    // Otherwise, render with standalone label (existing behavior)
    return (
        <div className="mb-4">
            {label && (
                <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={
                        {
                            color: globalSettings.theme.textColor,
                        }
                    }
                >{label}</label>
            )}
            {selectElement}
        </div>
    );
}

export default TsSelect;