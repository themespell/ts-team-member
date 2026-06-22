import { useMemo, useState } from "react";
import { PanelLeftClose, PanelLeftOpen, LayoutGrid, Brush, Settings, Type, Share2, Play } from "lucide-react";
import ContentTab from "./Tabs/ContentTab";
import StyleTab from './Tabs/StyleTab';
import TypographyTab from "./Tabs/TypographyTab.jsx";
import SocialTab from "./Tabs/SocialTab.jsx";
import MotionTab from "./Tabs/MotionTab.jsx";
import GlobalTab from "./Tabs/GlobalTab.jsx";
import {getTranslations} from "../../../common/utils/translations.js";

function Sidebar({ isOpen, selectedLayout, layoutType, onToggleSidebar }) {
    const translations = getTranslations();
    const [activeTab, setActiveTab] = useState("1");

    const tabs = useMemo(() => ([
        { id: "1", label: translations.content, icon: LayoutGrid, subtitle: "Team Members block", panel: <ContentTab /> },
        { id: "2", label: translations.style, icon: Brush, subtitle: `${selectedLayout} layout`, panel: <StyleTab selectedLayout={selectedLayout} layoutType={layoutType}/> },
        { id: "3", label: translations.font, icon: Type, subtitle: "Typography controls", panel: <TypographyTab /> },
        { id: "4", label: translations.social, icon: Share2, subtitle: "Social links styling", panel: <SocialTab /> },
        { id: "6", label: translations.motion, icon: Play, subtitle: "Animation options", panel: <MotionTab /> },
        { id: "7", label: translations.global, icon: Settings, subtitle: "Canvas and container", panel: <GlobalTab /> },
    ]), [translations, selectedLayout, layoutType]);

    const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

    return (
        <div className={`ts-editor-sidebar ${isOpen ? 'is-open' : 'is-closed'}`}>
            <aside className="ts-editor-sidebar__rail">
                <nav className="ts-editor-sidebar__nav">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                type="button"
                                className={`ts-editor-sidebar__rail-button ${activeTab === tab.id ? "is-active" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <Icon size={18} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <button
                    type="button"
                    className="ts-editor-sidebar__collapse"
                    onClick={onToggleSidebar}
                    aria-label={isOpen ? "Collapse panel" : "Open panel"}
                >
                    {isOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
                </button>
            </aside>

            <div className="ts-editor-sidebar__panel">
                <div className="ts-editor-sidebar__panel-header">
                    <div className="ts-editor-sidebar__panel-kicker">{activeTabData.label}</div>
                    <div className="ts-editor-sidebar__panel-subtitle">{activeTabData.subtitle}</div>
                </div>

                <div className="ts-editor-sidebar__panel-body">
                    {activeTabData.panel}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
