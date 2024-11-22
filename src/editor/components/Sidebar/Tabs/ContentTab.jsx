import { Collapse } from "antd";
import { TsSelect, TsSlider, TsDivider, TsSwitch } from '../../../../common/components/controls/tsControls';
import editorStore from '../../../states/editorStore';
import editorLocal from "../../../states/editorLocal.js";


function ContentTab() {
  const { selectedLayout, selectedView, carouselSettings, showcaseDetails } = editorStore();
  const { availableLayouts, availableViews, availableDetails } = editorLocal();

  return (
    <div>
      <TsSelect
      label="Choose a Layout"
      name="selectedLayout"
      options={availableLayouts}
      output="object"
      />

      <TsSelect
      label="View Style"
      name="selectedView"
      options={availableViews}
      output="object"
      />

      <TsSwitch
        label="Show Details"
        name="showcaseDetails"
      />

      {showcaseDetails === true && (
      <TsSelect
        label="Details Style"
        name="selectedDetails"
        options={availableDetails}
        output="object"
      />
      )}

      {selectedView.value === 'carousel' && (
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
            <TsSwitch
             label="Previous & Next Arrow"
             name="carouselSettings.arrows"
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