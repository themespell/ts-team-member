import { useState } from "react";
import { SquareChevronLeft, SquareChevronRight, LayoutDashboard, Paintbrush, Settings, Type, Play } from "lucide-react"; // Import Lucide icons
import ContentTab from "./Tabs/ContentTab";
import StyleTab from './Tabs/StyleTab';
import TypographyTab from "./Tabs/TypographyTab.jsx";
import MotionTab from "./Tabs/MotionTab.jsx";
import AdvanceTab from "./Tabs/AdvanceTab";

function Sidebar({ isOpen, selectedLayout, layoutType, onToggleSidebar }) {
    const [activeTab, setActiveTab] = useState("1"); // State to manage active tab

    return (
        <div className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
            {/* Small section (blue section) that is always visible */}
            <div className="sidebar-toggle">
                {/* Toggle button */}
                <div className="toggle-icon pb-12" onClick={onToggleSidebar}>
                    {isOpen ? (
                        <SquareChevronLeft size={22} /> // Show left chevron when sidebar is open
                    ) : (
                        <SquareChevronRight size={22} /> // Show right chevron when sidebar is closed
                    )}
                </div>

                {/* Buttons to toggle between tabs */}
                <div className="sidebar-buttons flex flex-col gap-12 pt-12">
                    <div className="flex flex-col justify-center items-center"
                         onClick={() => setActiveTab("1")}>
                        <button className={`sidebar-button ${activeTab === "1" ? "active" : ""}`}>
                            <LayoutDashboard size={22}/>
                        </button>
                        <p className="text-xs mt-1">Content</p>
                    </div>

                    <div className="flex flex-col justify-center items-center"
                         onClick={() => setActiveTab("2")}>
                        <button className={`sidebar-button ${activeTab === "2" ? "active" : ""}`}>
                            <Paintbrush size={22}/>
                        </button>
                        <p className="text-xs mt-1">Style</p>
                    </div>

                    <div className="flex flex-col justify-center items-center"
                         onClick={() => setActiveTab("3")}>
                        <button className={`sidebar-button ${activeTab === "3" ? "active" : ""}`}>
                            <Type size={22}/> {/* Icon for Advance */}
                        </button>
                        <p className="text-xs mt-1">Font</p>
                    </div>

                    <div className="flex flex-col justify-center items-center"
                         onClick={() => setActiveTab("4")}>
                        <button className={`sidebar-button ${activeTab === "4" ? "active" : ""}`}>
                            <Play size={22}/> {/* Icon for Advance */}
                        </button>
                        <p className="text-xs mt-1">Motion</p>
                    </div>

                    <div className="flex flex-col justify-center items-center"
                         onClick={() => setActiveTab("5")}>
                        <button className={`sidebar-button ${activeTab === "5" ? "active" : ""}`}>
                            <Settings size={22}/>
                        </button>
                        <p className="text-xs mt-1">Advance</p>
                    </div>

                </div>
            </div>

            {/* Main sidebar content */}
            <div className="sidebar">
                {/* Render the active tab component */}
                <div className="sidebar-content">
                    {activeTab === "1" && <ContentTab/>}
                    {activeTab === "2" && (
                        <StyleTab selectedLayout={selectedLayout} layoutType={layoutType}/>
                    )}
                    {activeTab === "3" && <TypographyTab />}
                    {activeTab === "4" && <MotionTab />}
                    {activeTab === "5" && <AdvanceTab />}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;