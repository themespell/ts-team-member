import { useState } from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

function AdvanceTab(){
    const [gapVertical, setGapVertical] = useState(30);
    
    return (
        <div>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gap Vertical</label>
                <Slider
                aria-label="gap-vertical-slider"
                value={gapVertical}
                onChange={setGapVertical}
                min={10}
                max={50}
                mt={2}
                >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider>
            </div>
        </div>
    );
}

export default AdvanceTab;