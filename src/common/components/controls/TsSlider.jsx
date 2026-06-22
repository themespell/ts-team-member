import { useEffect, useState } from "react";
import { Slider, InputNumber, Dropdown, Button } from 'antd';
import { DesktopOutlined, TabletOutlined, MobileOutlined, DownOutlined } from '@ant-design/icons';
import get from 'lodash/get';
import editorLocal from "../../../editor/states/editorLocal.js";
import editorStore from '../../../editor/states/editorStore';
import editorFunction from '../../../editor/states/editorFunction';

function TsSlider({ label, name, range, unit, responsive, onChange }) {
    const { viewport } = editorLocal();
    const [selectedView, setSelectedView] = useState('Desktop'); // Default view
    const [selectedUnit, setSelectedUnit] = useState('px'); // Default unit

    const viewMap = {
        desktop: 'Desktop',
        tablet: 'Tablet',
        mobile: 'Mobile',
    };

    useEffect(() => {
        if (responsive) {
            setSelectedView(viewMap[viewport] || 'Desktop');
        }
    }, [viewport, responsive]);

    const storedValue = get(
        editorStore(),
        responsive ? `${name}[${selectedView.toLowerCase()}]` : name,
        0
    );

    useEffect(() => {
        if (!unit || typeof storedValue !== 'string') {
            return;
        }

        const matchedUnit = storedValue.match(/[a-z%]+$/i)?.[0];
        if (matchedUnit && matchedUnit !== selectedUnit) {
            setSelectedUnit(matchedUnit);
        }
    }, [storedValue, unit, selectedUnit]);

    const handleDropdownClick = (key) => {
        setSelectedView(viewMap[key]);
    };

    const handleUnitClick = (key) => {
        setSelectedUnit(key);
    };

    const items = [
        { key: 'desktop', label: <Button icon={<DesktopOutlined />} onClick={() => handleDropdownClick('desktop')} /> },
        { key: 'tablet', label: <Button icon={<TabletOutlined />} onClick={() => handleDropdownClick('tablet')} /> },
        { key: 'mobile', label: <Button icon={<MobileOutlined />} onClick={() => handleDropdownClick('mobile')} /> },
    ];

    const unitItems = [
        { key: 'px', label: <Button onClick={() => handleUnitClick('px')}>px</Button> },
        { key: 'em', label: <Button onClick={() => handleUnitClick('em')}>em</Button> },
        { key: '%', label: <Button onClick={() => handleUnitClick('%')}>%</Button> },
    ];

    const { saveSettings } = editorFunction();

    const handleChange = (value) => {
        const valueWithUnit = unit ? `${value}${selectedUnit}` : value; // Add unit only if `unit` is true

        if (onChange) {
            onChange(valueWithUnit);
        } else {
            if (responsive) {
                saveSettings(`${name}[${selectedView.toLowerCase()}]`, valueWithUnit);
            } else {
                saveSettings(name, valueWithUnit);
            }
        }
    };

    const sliderValue = parseInt(storedValue);

    return (
        <div className="ts-editor-field ts-editor-field--slider">
            {label && (
                <div className="ts-editor-field__header">
                    <div className="ts-editor-field__header-left">
                        <label className="ts-editor-field__label">{label}</label>
                        {responsive && (
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <Button
                                    className="ts-editor-device-button"
                                    icon={
                                        selectedView === 'Desktop' ? <DesktopOutlined /> :
                                            selectedView === 'Tablet' ? <TabletOutlined /> :
                                                <MobileOutlined />
                                    }
                                />
                            </Dropdown>
                        )}
                    </div>
                    {unit && (
                        <Dropdown
                            menu={{
                                items: unitItems.map((item) => ({
                                    ...item,
                                    label: (
                                        <Button
                                            type={item.key === selectedUnit ? 'primary' : 'default'}
                                            onClick={() => handleUnitClick(item.key)}
                                        >
                                            {item.key}
                                        </Button>
                                    ),
                                })),
                            }}
                            trigger={['click']}
                        >
                            <Button className="ts-editor-unit-button">
                                {selectedUnit} <DownOutlined />
                            </Button>
                        </Dropdown>
                    )}
                </div>
            )}
            <div className="ts-editor-slider">
                <div className="ts-editor-slider__track">
                    <Slider
                        className="ts-editor-slider__range"
                        value={isNaN(sliderValue) ? 0 : sliderValue}
                        min={parseInt(range.min)}
                        max={parseInt(range.max)}
                        onChange={handleChange}
                        styles={{
                            track: {
                                background: 'linear-gradient(90deg, #6963ff 0%, #7f5cff 100%)',
                                height: '4px',
                            },
                            rail: {
                                backgroundColor: '#d8dbe7',
                                height: '4px',
                            },
                            handle: {
                                borderColor: '#6963ff',
                                boxShadow: '0 0 0 4px rgba(105, 99, 255, 0.12)',
                            },
                            width: '100%',
                        }}
                    />
                </div>
                <InputNumber
                    className="ts-editor-slider__input"
                    value={isNaN(sliderValue) ? 0 : sliderValue}
                    min={parseInt(range.min)}
                    max={parseInt(range.max)}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default TsSlider;
