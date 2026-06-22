import {useState} from "react";
import { TsButton } from "../../common/components/controls/tsControls";
import editorFunction from "../states/editorFunction";
import editorLocal from "../states/editorLocal.js";
import {Monitor, Tablet, Smartphone, Code, CircleX, Copy, ClipboardPaste, ClipboardCopy, Undo2, Redo2} from 'lucide-react';
import {Button, Dropdown} from "antd";
import {TsModal} from "../../common/components/controls/tsControls";
import {getTranslations} from "../../common/utils/translations.js";
import TsProBadge from "../../common/components/controls/TsProBadge.jsx";

function Topbar({ type, onCopySettings, onPasteSettings, onUndo, onRedo, canUndo, canRedo }) {
    const translations = getTranslations();
    const tsteamLogo = tsteam_settings.assets_path;
    const isPro = !!tsteam_settings.is_pro;
    const isLicenseInactive = !!window.tsTeamPro?.is_licence_inactive;

    const { viewport, setViewport } = editorLocal();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const post_id = urlParams.get('post_id')

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

    const handleCodeClick = () => {
        console.log('working')
        setIsModalVisible(true);
    };

    const items = [
        {
            key: 'copy',
            label: (
                <TsButton
                    label={
                        <>
                            <ClipboardCopy /> {translations.copyDesign}
                            {(!isPro || isLicenseInactive) && <TsProBadge />}
                        </>
                    }
                    disabled={!isPro || isLicenseInactive}
                    className={!isPro || isLicenseInactive ? "opacity-50 cursor-not-allowed" : ""}
                    onClick={!isPro || isLicenseInactive ? (e) => e.preventDefault() : onCopySettings}
                />
            ),
        },
        {
            key: 'paste',
            label: (
                <TsButton
                    label={
                        <>
                            <ClipboardPaste /> {translations.pasteDesign}
                            {(!isPro || isLicenseInactive) && <TsProBadge />}
                        </>
                    }
                    disabled={!isPro || isLicenseInactive}
                    className={!isPro || isLicenseInactive ? "opacity-50 cursor-not-allowed" : ""}
                    onClick={!isPro || isLicenseInactive ? (e) => e.preventDefault() : onPasteSettings}
                />
            ),
        },
    ];

    return (
        <>
            <div className="ts-editor-topbar">
                <div className="ts-editor-topbar__brand">
                    <div className="ts-editor-topbar__brand-mark">
                        <img src={`${tsteamLogo}/img/tsteam_icon_white.svg`} className="tsteam__topbar-logo w-5 h-5"/>
                    </div>
                    <div className="ts-editor-topbar__brand-copy">
                        <span>Team Members</span>
                        <small>Draft · auto-saved</small>
                    </div>
                    <div className="ts-editor-topbar__history">
                        <button type="button" className="ts-editor-icon-button" aria-label="Undo" onClick={onUndo} disabled={!canUndo}>
                            <Undo2 size={16} />
                        </button>
                        <button type="button" className="ts-editor-icon-button" aria-label="Redo" onClick={onRedo} disabled={!canRedo}>
                            <Redo2 size={16} />
                        </button>
                    </div>
                </div>

                <div className="ts-editor-viewport-switcher">
                    <Button
                        className={`ts-editor-viewport-button ${viewport === 'desktop' ? 'is-active' : ''}`}
                        icon={<Monitor/>}
                        onClick={() => handleViewportChange('desktop')}
                    />
                    <Button
                        className={`ts-editor-viewport-button ${viewport === 'tablet' ? 'is-active' : ''}`}
                        icon={<Tablet/>}
                        onClick={() => handleViewportChange('tablet')}
                    />
                    <Button
                        className={`ts-editor-viewport-button ${viewport === 'mobile' ? 'is-active' : ''}`}
                        icon={<Smartphone />}
                        onClick={() => handleViewportChange('mobile')}
                    />
                </div>

                <div className="ts-editor-topbar__actions">
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <TsButton
                            label={<><Copy size={16} /> Actions</>}
                            className="ts-editor-ghost-button"
                        />
                    </Dropdown>
                    <TsButton
                        label={<><Code size={16} /> Code</>}
                        className="ts-editor-ghost-button"
                        onClick={handleCodeClick}
                    />
                    <TsButton
                        label={translations.publish}
                        className="ts-editor-publish-button"
                        onClick={handlePublishClick}
                    />
                    <TsButton
                        label={<>Close <CircleX size={14} /></>}
                        className="ts-editor-close-button"
                        onClick={handleBacktoAdmin}
                    />
                </div>
            </div>

            {/*Code Modal*/}
            <TsModal
                isOpen={isModalVisible}
                isClose={() => setIsModalVisible(false)}
                width={550}
                name="Code Modal"
            >
                <div className="flex flex-col items-center justify-center p-8">
                    {/* Warning Icon Circle */}
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                        <Code className="w-8 h-8 text-purple-600"/>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Shortcode</h3>
                    <div className="mockup-code tsteam__color--bg-alt text-white">
                        <pre data-prefix="$"><code>[tsteam_showcase id="{post_id}"]</code></pre>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-2">PHP Snippet</h3>
                    <div className="mockup-code tsteam__color--bg-alt text-white">
                        <pre data-prefix="$"><code>echo do_shortcode('[tsteam_showcase id="{post_id}"]');</code></pre>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center items-center mt-8 space-x-4 w-full">
                        <TsButton
                            label="Done"
                            onClick={() => setIsModalVisible(false)}
                        />
                    </div>
                </div>
            </TsModal>

            {/*Layout Import Modal*/}
        </>
    );
}

export default Topbar;
