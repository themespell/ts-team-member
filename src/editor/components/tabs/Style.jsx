import { ColorPicker } from "antd";

import HoverAnimation from './Controls/HoverAnimation';

import useStore from '../../../store';

function StyleTab(){
    const { backgroundColor, setBackgroundColor } = useStore();

    console.log(backgroundColor)

    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <ColorPicker
                defaultValue="#1677ff"
                size="small"
                />
            </div>
            <HoverAnimation />
        </div>
    );
}

export default StyleTab;