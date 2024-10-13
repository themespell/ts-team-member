import { TsSlider, TsDivider, TsColor, TsFont } from './tsControls';

const renderControls = {
    slider: (control) => (
        <TsSlider
            label={control.label}
            range={control.range}
            name={control.name}
            value={control.value}
            unit={control.unit}
            onChange={control.onChange}
        />
    ),
    divider: () => <TsDivider />,
    color: (control) => (
        <TsColor
            label={control.label}
            value={control.value}
            onChange={control.onChange}
        />
    ),
    font: (control) => (
        <TsFont
            label={control.label}
            isPro={control.isPro}
        />
    )
};

export default renderControls;