import { Select } from "antd";
import useStore from '../../../../store';

function HoverAnimation(){
    const { selectedAnimation, setSelectedAnimation } = useStore();

    const handleSelectChange = (value) => {
        setSelectedAnimation(value);
      };

    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Hover Animation</label>
                <Select
                defaultValue="tsh-3d-float"
                style={{
                    width: 300,
                }}
                onChange={handleSelectChange}
                options={[
                    {
                        value: 'tsh-3d-float',
                        label: '3D Float',
                    },
                    {
                        value: 'tsh-tilt',
                        label: 'Tilt',
                    },
                    {
                        value: 'tsh-slide-top',
                        label: 'Slide Top',
                    },
                    {
                        value: 'tsh-shadow-pop-tr',
                        label: 'Shadow Pop',
                    },
                    {
                        value: 'tsh-shadow-drop-center',
                        label: 'Drop Shadow',
                    },
                    {
                        value: 'tsh-shadow-drop-2-tr',
                        label: 'Drop Shadow 2',
                    },
                ]}
                />
            </div>
        </div>
    );
}

export default HoverAnimation;