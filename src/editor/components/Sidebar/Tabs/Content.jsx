import TsInputGroup from '../../../../common/components/controls/TsInputGroup';
import TsSelect from '../../../../common/components/controls/TsSelect';
import TsSlider from '../../../../common/components/controls/TsSlider';
import TsDivider from '../../../../common/components/controls/TsDivider';

import editorStore from '../../../states/editorStore';

const defaultLayouts = [
  {
    label: 'Card',
    value: 'Card',
  },
  {
    label: 'Overlay',
    value: 'Overlay',
  },
  {
    label: 'Blur',
    value: 'Blur',
  },
  {
    label: 'Avatar',
    value: 'Avatar',
  },
  {
    label: 'HorizontalCard',
    value: 'HorizontalCard',
  },
];

const range = {
  min: 1,
  max: 20,
};

const padding = {
  top: 1,
  right: 20,
  bottom: 20,
  left: 10
};

function ContentTab() {
  const { layout, setLayout } = editorStore();

  return (
    <div>
      <TsSelect
      label="Choose a Layout"
      value={layout}
      options={defaultLayouts}
      onChange={(value) => setLayout(value)}
      />

      <TsSelect
      label="Layout Action"
      value={layout}
      options={defaultLayouts}
      onChange={(value) => setLayout(value)}
      />
      <TsDivider />
      <TsSlider
      label="Container Width"
      range={range}
      />
      <TsSlider
      label="Columns"
      range={range}
      />
      <TsSlider
      label="Horizontal Gap"
      range={range}
      />
      <TsSlider
      label="Vertical Gap"
      range={range}
      />
    </div>
  );
}

export default ContentTab;