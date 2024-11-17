import {useState} from "react";
import { TsButton } from "../../common/components/controls/tsControls";
import editorFunction from "../states/editorFunction";
import editorLocal from "../states/editorLocal.js";
import {DesktopOutlined, MobileOutlined, TabletOutlined} from "@ant-design/icons";
import {Button} from "antd";

function Topbar({ type }) {
    const { viewport, setViewport } = editorLocal();

    const handleViewportChange = (newViewport) => {
        setViewport(newViewport); // Update global state
    };

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
            <div className="flex tsteam__color--bg p-4 justify-between items-center">

                {/* Responsive Buttons */}
                <div className="editor-toolbar flex gap-2 mx-auto">
                    <Button
                        className={`btn ${viewport === 'desktop' ? 'btn-primary' : ''}`}
                        style={{width: '40px', height: '40px'}}
                        icon={<DesktopOutlined />}
                        onClick={() => handleViewportChange('desktop')}
                    />
                    <Button
                        className={`btn ${viewport === 'tablet' ? 'btn-primary' : ''}`}
                        style={{width: '40px', height: '40px'}}
                        icon={<TabletOutlined />}
                        onClick={() => handleViewportChange('tablet')}
                    />
                    <Button
                        className={`btn ${viewport === 'mobile' ? 'btn-primary' : ''}`}
                        style={{width: '40px', height: '40px'}}
                        icon={<MobileOutlined />}
                        onClick={() => handleViewportChange('mobile')}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
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