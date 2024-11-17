import { Collapse } from "antd";
import { TsSelect, TsSlider, TsDivider, TsSwitch } from '../../../../common/components/controls/tsControls';
import editorStore from '../../../states/editorStore';
import editorFunction from '../../../states/editorFunction';

const defaultLayouts = [
  {
    label: 'Card',
    value: 'Card',
  },
  // {
  //   label: 'Overlay',
  //   value: 'Overlay',
  // },
  // {
  //   label: 'Blur',
  //   value: 'Blur',
  // },
  // {
  //   label: 'Avatar',
  //   value: 'Avatar',
  // },
  // {
  //   label: 'HorizontalCard',
  //   value: 'HorizontalCard',
  // },
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
              name="carouselSettings.slidesToShow.default"
              range={carouselSettings.slidesToShow?.range}
              responsive={true}
              />
            <TsSlider
            label="Slides To Scroll"
            name="carouselSettings.slidesToScroll.default"
            range={carouselSettings.slidesToScroll?.range}
            responsive={true}
            />
            <TsSwitch
            label="Draggable"
            name="carouselSettings.draggable"
            />
            <TsSwitch
            label="Centered Slide"
            name="carouselSettings.centerSlide"
            />
            <TsSwitch
            label="Autoplay"
            name="carouselSettings.autoPlay"
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