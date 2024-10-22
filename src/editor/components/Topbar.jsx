import { TsButton } from "../../common/components/controls/tsControls";
import editorFunction from "../states/editorFunction";

function Topbar({ type }) {
    const handlePublishClick = () => {
        const action = `tsteam/${type}/update/settings`;
        editorFunction.getState().updateSettings(action);
    };
    
    const handleBacktoAdmin = () => {
        const admin_url = `admin.php?page=tsteam-showcase`;
        window.location.href = admin_url;
    };

    return (
        <>
        <div className="flex justify-end tsteam__color--bg p-4">
            <div className="flex justify-end w-2/6 gap-2">
                <TsButton 
                    label="Back to Admin"
                    onClick={handleBacktoAdmin}
                />
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