import { Select } from '@chakra-ui/react';
import useStore from '../../../store';

function HoverAnimation(){
    const { selectedAnimation, setSelectedAnimation } = useStore();

    const handleSelectChange = (value) => {
        setSelectedAnimation(value);
      };

    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Hover Animation</label>
                <Select value={selectedAnimation} onChange={(e) => handleSelectChange(e.target.value)} mt={2}>
                <option value="tsh-3d-float">3D Float</option>
                <option value="tsh-tilt">Tilt</option>
                <option value="tsh-slide-top">Slide Top</option>
                <option value="tsh-shadow-pop-tr">Shadow Pop</option>
                <option value="tsh-shadow-drop-center">Drop Shadow</option>
                <option value="tsh-shadow-drop-2-tr">Drop Shadow 2</option>
                </Select>
            </div>
        </div>
    );
}

export default HoverAnimation;