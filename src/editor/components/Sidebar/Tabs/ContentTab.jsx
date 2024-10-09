import { Collapse } from "antd";
import { TsSelect, TsSlider, TsDivider, TsSwitch } from '../../../../common/components/controls/tsControls';
import editorStore from '../../../states/editorStore';
import editorFunction from '../../../states/editorFunction';

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

function ContentTab() {
  const { layout, view, carouselSettings } = editorStore();
  const { saveSettings } = editorFunction();
  return (
    <div>
      <TsSelect
      label="Choose a Layout"
      value={layout}
      options={defaultLayouts}
      onChange={(value) => saveSettings('layout', value)}
      />

      <TsSelect
      label="View Style"
      value={view}
      options={viewStyle}
      onChange={(value) => saveSettings('view', value)}
      />

      {view === 'carousel' && (
      <div>
      <TsDivider />
      <Collapse
      defaultActiveKey={['1']}
      items={[
        {
          key: '1',
          label: 'Carousel Settings',
          children: [
            <>
            <TsSlider
              label="Slides To Show"
              range={carouselSettings.slidesToShow?.range}
              value={carouselSettings.slidesToShow?.default}
              onChange={(value) => saveSettings('carouselSettings.slidesToShow.default', value)}
              />
            <TsSlider
            label="Slides To Scroll"
            range={carouselSettings.slidesToScroll?.range}
            value={carouselSettings.slidesToScroll?.default}
            onChange={(value) => saveSettings('carouselSettings.slidesToScroll.default', value)}
            />
            <TsSwitch
            label="Draggable"
            value={carouselSettings.draggable}
            onChange={(value) => saveSettings('carouselSettings.draggable', value ? 'true' : 'false')}
            />
            <TsSwitch
            label="Centered Slide"
            value={carouselSettings.centerSlide}
            onChange={(value) => saveSettings('carouselSettings.centerSlide', value ? 'true' : 'false')}
            />
            <TsSwitch
            label="Autoplay"
            value={carouselSettings.autoPlay}
            onChange={(value) => saveSettings('carouselSettings.autoPlay', value ? 'true' : 'false')}
            />
            </>
          ],
        },
      ]}
    />
    </div>
      )}
      {/* <TsSlider
      label="Horizontal Gap"
      />
      <TsSlider
      label="Vertical Gap"
      /> */}
    </div>
  );
}

export default ContentTab;