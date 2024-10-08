import { TsButton } from "../../common/components/controls/tsControls";
import editorFunction from "../states/editorFunction";

function Topbar({ type }) {
    const handlePublishClick = () => {
        const action = `tsteam/${type}/update/settings`;
        editorFunction.getState().updateSettings(action);
    };

    return (
        <>
        <div className="flex justify-end bg-black p-4">
            <div className="flex justify-end w-2/6">
                <TsButton 
                    label="Publish"
                    onClick={handlePublishClick}
                />
            </div>
        </div>
        </>
    );
}

export default Topbar;