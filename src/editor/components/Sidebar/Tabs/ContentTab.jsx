import { TsSelect, TsSlider, TsDivider } from '../../../../common/components/controls/tsControls';
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

const viewStyle = [
  {
    label: 'Static / Grid',
    value: 'grid',
  },
  {
    label: 'Carousel',
    value: 'carousel',
  },
];

const range = {
  min: 1,
  max: 20,
};

function ContentTab() {
  const { layout, setLayout } = editorStore();
  const { view, setView } = editorStore();

  return (
    <div>
      <TsSelect
      label="Choose a Layout"
      value={layout}
      options={defaultLayouts}
      onChange={(value) => setLayout(value)}
      />

      <TsSelect
      label="View Style"
      value={view}
      options={viewStyle}
      onChange={(value) => setView(value)}
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