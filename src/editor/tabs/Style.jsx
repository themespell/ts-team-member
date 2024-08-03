import { useState } from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select } from '@chakra-ui/react';
import { HexColorPicker } from "react-colorful";

import HoverAnimation from './Controls/HoverAnimation';

import useStore from '../../store';

function StyleTab(){
    const [containerWidth, setContainerWidth] = useState(1200);
    const [columns, setColumns] = useState(3);
    const [gap, setGap] = useState(30);
    const { backgroundColor, setBackgroundColor } = useStore();

    console.log(backgroundColor)

    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
            </div>
            <HoverAnimation />

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Card Action</label>
                <Select value="Single Page" mt={2} isReadOnly>
                <option value="Single Page">Single Page</option>
                </Select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Container Width</label>
                <Slider
                aria-label="container-width-slider"
                value={containerWidth}
                onChange={setContainerWidth}
                min={800}
                max={1600}
                mt={2}
                >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Columns</label>
                <Slider aria-label="columns-slider" value={columns} onChange={setColumns} min={1} max={5} mt={2}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gap</label>
                <Slider aria-label="gap-slider" value={gap} onChange={setGap} min={10} max={50} mt={2}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider>
            </div>
        </div>
    );
}

export default StyleTab;